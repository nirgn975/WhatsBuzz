import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';

import { TrendsActions } from '../actions';
import { PostsService } from '../services';

@Injectable()
export class TrendsEffects {
    constructor (
      private update$: Actions,
      private trendsActions: TrendsActions,
      private svc: PostsService,
    ) {}

    @Effect() loadTrendsPosts$ = this.update$
      .ofType(TrendsActions.LOAD_POSTS)
      .switchMap(() => this.svc.getTrendPosts())
      .map(posts => this.trendsActions.loadPostsSuccess(posts));
}
