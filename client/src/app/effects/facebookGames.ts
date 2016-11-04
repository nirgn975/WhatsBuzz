import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';

import { FacebookGamesActions } from '../actions';
import { PostsService } from '../services';

@Injectable()
export class FacebookGamesEffects {
    constructor (
      private update$: Actions,
      private facebookGamesActions: FacebookGamesActions,
      private svc: PostsService,
    ) {}

    @Effect() loadFacebookGamesPosts$ = this.update$
      .ofType(FacebookGamesActions.LOAD_POSTS)
      .switchMap(() => this.svc.getFacebookGamePosts())
      .map(posts => this.facebookGamesActions.loadPostsSuccess(posts));
}
