import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';

import { RecommendationsActions } from '../actions';
import { RecommandationService } from '../services';

@Injectable()
export class RecommandationEffects {
    constructor (
      private update$: Actions,
      private recommendationsActions: RecommendationsActions,
      private svc: RecommandationService,
    ) {}

    @Effect() loadRecommendations$ = this.update$
      .ofType(RecommendationsActions.LOAD_RECOMMENDATIONS)
      .switchMap((category) => this.svc.getRecommendation(category.payload))
      .map(recommendations => this.recommendationsActions.loadRecommendationsSuccess(recommendations));
}
