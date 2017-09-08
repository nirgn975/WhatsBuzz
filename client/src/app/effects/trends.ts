import 'rxjs/add/operator/switchMap';
import { Injectable } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { PostsService } from '../services/posts.service';
import * as trends from '../actions/trends';

@Injectable()
export class TrendsEffects {
  constructor(
    private actions$: Actions,
    private postsService: PostsService
  ) { }

  @Effect()
  loadTrendsPosts$: Observable<Action>= this.actions$
    .ofType(trends.LOAD_TRENDS_POSTS)
    .switchMap(_ => this.postsService.getTrendsPosts()
      .map(postsData => new trends.LoadTrendsPostsSuccessAction(postsData))
      // .catch(error => Observable.of(getPostsFail(error)))
    );

  @Effect()
  loadTrendsNextPosts$: Observable<Action>= this.actions$
    .ofType(trends.LOAD_TRENDS_NEXT_POSTS)
    .map(toPayload)
    .switchMap(url => this.postsService.getNextPosts(url)
      .map(postsData => new trends.LoadTrendsNextPostsSuccessAction(postsData))
      // .catch(error => Observable.of(getPostsFail(error)))
    );

}
