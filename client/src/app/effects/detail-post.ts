import 'rxjs/add/operator/switchMap';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { DetailPostService } from '../services/detail-post.service';
import * as detailPost from '../actions/detail-post';


@Injectable()
export class DetailPostEffects {
  constructor(private actions$: Actions, private detailPostService: DetailPostService) { }

    @Effect()
    loadBuzz$: Observable<Action>= this.actions$
      .ofType(detailPost.ActionTypes.LOAD_DETAIL_POST)
      .switchMap((postId) => this.detailPostService.getDetailPost(postId.payload))
      .map(detailPostData => new detailPost.LoadDetailPostSuccessAction(detailPostData));

    @Effect()
    loadFacebookGame$: Observable<Action>= this.actions$
      .ofType(detailPost.ActionTypes.LOAD_FACEBOOK_GAME)
      .switchMap((data) => this.detailPostService.getGame(data.payload))
      .map(gameCode => new detailPost.LoadFacebookGameSuccessAction(gameCode));

}
