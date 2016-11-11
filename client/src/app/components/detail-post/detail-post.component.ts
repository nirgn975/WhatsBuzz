import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { AppState } from '../../reducers';
import { DetailPostActions } from '../../actions';
import { DetailPost } from '../../models';

import { FacebookService, FacebookInitParams, FacebookLoginResponse } from 'ng2-facebook-sdk/dist';

@Component({
  selector: 'wb-detail-post',
  templateUrl: './detail-post.component.html',
  styleUrls: ['./detail-post.component.scss']
})
export class DetailPostComponent implements OnInit {
  private detailPost: DetailPost;

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private detailPostActions: DetailPostActions,
    private fb: FacebookService
  ) {
    store.select(state => state.detailPost).subscribe(
      (res) => this.detailPost = res
    );

    let fbParams: FacebookInitParams = {
      appId   : '1063610257017045',
      cookie  : true,  // enable cookies to allow the server to access the session
      xfbml   : true,  // parse social plugins on this page
      version : 'v2.7' // use graph api version 2.7
    };
    this.fb.init(fbParams);
  }

  ngOnInit() {
    let postId = this.route.snapshot.params['uuid'];
    this.store.dispatch(this.detailPostActions.loadDetailPost(postId));
  }

  onFacebookLoginClick(gameId) {
    this.fb.login().then(
      (response: FacebookLoginResponse) => {
        if (response.status = 'connected') {
          console.log(gameId);
          console.log(response);
        }
      }
    );
  }
}
