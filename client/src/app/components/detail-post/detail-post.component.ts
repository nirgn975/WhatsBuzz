import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { AppState } from '../../reducers';
import { DetailPostActions } from '../../actions';
import { DetailPost } from '../../models';

declare const FB:any;

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
    private detailPostActions: DetailPostActions
  ) {
    store.select(state => state.detailPost).subscribe(
      (res) => this.detailPost = res
    );

    FB.init({
      appId      : '1063610257017045',
      cookie     : true,  // enable cookies to allow the server to access
                          // the session
      xfbml      : true,  // parse social plugins on this page
      version    : 'v2.5' // use graph api version 2.5
    });
  }

  ngOnInit() {
    let postId = this.route.snapshot.params['uuid'];
    this.store.dispatch(this.detailPostActions.loadDetailPost(postId));

    FB.getLoginStatus(response => {
      this.statusChangeCallback(response);
    });
  }

  onFacebookLoginClick() {
    FB.login();
  }

  statusChangeCallback(resp) {
    if (resp.status === 'connected') {
      console.log(resp);
      // connect here with your server for facebook login by passing access token given by facebook
    } else if (resp.status === 'not_authorized') {
      console.log(resp);
    } else {
      console.log(resp);
    }
  }

}
