import { Component, OnInit, DoCheck } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { FacebookService, FacebookInitParams, FacebookLoginResponse } from 'ng2-facebook-sdk/dist';

import * as fromRoot from '../../reducers';
import * as detailPostAction from '../../actions/detail-post';
import { DetailPost } from '../../models/detail-post';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'wb-detail-post',
  templateUrl: './detail-post.component.html',
  styleUrls: ['./detail-post.component.scss']
})
export class DetailPostComponent implements OnInit, DoCheck {
  private currentId = '';
  private showSpinner: boolean = false;
  public detailPost$: DetailPost;

  constructor(
    private store: Store<fromRoot.State>,
    private route: ActivatedRoute,
    private fb: FacebookService,
    private seoService: SeoService,
  ) {
    this.store.select(fromRoot.getDetailPostState).subscribe(
      (res) => { this.detailPost$ = res, this.updateFacebookMetaTags() }
    );

    let fbParams: FacebookInitParams = {
      appId   : '1063610257017045',
      cookie  : true,  // enable cookies to allow the server to access the session
      xfbml   : true,  // parse social plugins on this page
      version : 'v2.7' // use graph api version 2.7
    };
    this.fb.init(fbParams);

    // Load static share buttons.
    let node = document.createElement('script');
    node.src = 'https://static.addtoany.com/menu/page.js';
    node.type = 'text/javascript';
    node.async = true;
    node.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(node);
  }

  ngOnInit() {
    this.currentId = this.route.snapshot.params['uuid'];
    this.store.dispatch(new detailPostAction.LoadDetailPostAction(this.currentId));
  }

  ngDoCheck() {
    // Check if the url has changed, if it is, change the data (dispatch an action).
    if (this.currentId !== this.route.snapshot.params['uuid']) {
      this.showSpinner = false;
      this.currentId = this.route.snapshot.params['uuid'];
      this.store.dispatch(new detailPostAction.LoadDetailPostAction(this.currentId));
    }
  }

  updateFacebookMetaTags() {
    this.seoService.setMetaOgUrl('http://www.whatsbuzz.co.il' + this.detailPost$.unique_id);
    this.seoService.setMetaOgTitle(this.detailPost$.title);
    this.seoService.setMetaOgDescription(this.detailPost$.body.replace(/<\/?[^>]+(>|$)/g, ""));
    this.seoService.setMetaOgImage(this.detailPost$.banner_image);
  }

  enableSpinner() {
    this.showSpinner = true;

    // Only when the user retry.
    if (this.detailPost$.content) {
      this.detailPost$.content = '';
    }
  }

  onFacebookLogin(gameId) {
    this.enableSpinner();
    this.loadPlaybuzzScript();

    this.fb.login().then(
      (response: FacebookLoginResponse) => {
        if (response.status = 'connected') {
          let game = {
            userID: response.authResponse.userID,
            accessToken: response.authResponse.accessToken,
            unique_id: this.currentId
          };
          this.store.dispatch(new detailPostAction.LoadFacebookGamePostAction(game));
        }
      }
    );
  }

  onFacebookShare(gameId) {
    let shareParams;
    if (this.detailPost$.type === 'facebook-game') {
      // Facebook Game.
      shareParams = {
        method: 'share',
        title: this.detailPost$.title,
        picture: this.detailPost$.content,
        href: 'http://www.whatsbuzz.co.il/posts/' + this.detailPost$.unique_id,
        hashtag: '#WhatsBuzz',
        link: 'http://www.whatsbuzz.co.il',
        description: this.detailPost$.body.replace(/<\/?[^>]+(>|$)/g, ""),
        caption: 'http://www.whatsbuzz.co.il',
        display: 'popup',
      };
    } else {
      // Trends.
      shareParams = {
        method: 'share',
        title: this.detailPost$.title,
        picture: this.detailPost$.banner_image,
        href: 'http://www.whatsbuzz.co.il/posts/' + this.detailPost$.unique_id,
        hashtag: '#WhatsBuzz',
        link: 'http://www.whatsbuzz.co.il',
        description: this.detailPost$.body.replace(/<\/?[^>]+(>|$)/g, ""),
        caption: 'http://www.whatsbuzz.co.il',
        display: 'popup',
      };
    }
    this.fb.ui(shareParams);
  }

  loadPlaybuzzScript() {
    let node = document.createElement('script');
    node.src = '//cdn.playbuzz.com/widget/feed.js';
    node.type = 'text/javascript';
    node.async = true;
    node.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(node);
  }
}
