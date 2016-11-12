import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';

import { DetailPostActions } from '../actions';
import { DetailPostService } from '../services';

@Injectable()
export class DetailPostEffects {
    constructor (
      private update$: Actions,
      private detailPostActions: DetailPostActions,
      private svc: DetailPostService,
    ) {}

    @Effect() loadBuzz$ = this.update$
      .ofType(DetailPostActions.LOAD_DETAIL_POST)
      .switchMap((postId) => this.svc.getDetailPost(postId.payload))
      .map(detailPost => this.detailPostActions.loadDetailPostSuccess(detailPost));

    @Effect() loadFacebookGame$ = this.update$
      .ofType(DetailPostActions.LOAD_FACEBOOK_GAME)
      .switchMap((data) => this.svc.getGame(data.payload))
      .map(gameCode => this.detailPostActions.loadFacebookGameSuccess(gameCode));
}
