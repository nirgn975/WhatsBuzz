import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';

import { RecommendationsActions } from '../actions';
import { DetailPostActions } from '../actions';
import { RecommandationService } from '../services';

@Injectable()
export class RecommandationEffects {
    constructor (
      private update$: Actions,
      private recommendationsActions: RecommendationsActions,
      private detailPostActions: DetailPostActions,
      private svc: RecommandationService,
    ) {}

    @Effect() loadRecommendations$ = this.update$
      .ofType(DetailPostActions.LOAD_DETAIL_POST_SUCCESS)
      .switchMap((category) => this.svc.getRecommendation(category.payload.age_categories))
      .map(recommendations => this.recommendationsActions.loadRecommendationsSuccess(recommendations));
}
