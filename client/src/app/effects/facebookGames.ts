import 'rxjs/add/operator/switchMap';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { PostsService } from '../services/posts.service';
import * as facebookGames from '../actions/facebookGames';


@Injectable()
export class FacebookGamesEffects {
  constructor(private actions$: Actions, private postsService: PostsService) { }

    @Effect()
    loadFacebookGamesPosts$: Observable<Action>= this.actions$
      .ofType(facebookGames.ActionTypes.LOAD_POSTS)
      .switchMap((page) => this.postsService.getFacebookGamePosts(page.payload))
      .map(posts => new facebookGames.LoadPostsSuccessAction(posts));

    @Effect()
    loadMoreFacebookGamesPosts$: Observable<Action>= this.actions$
      .ofType(facebookGames.ActionTypes.LOAD_MORE_POSTS)
      .switchMap((page) => this.postsService.getFacebookGamePosts(page.payload))
      .map(posts => new facebookGames.LoadMorePostsSuccessAction(posts));

}
