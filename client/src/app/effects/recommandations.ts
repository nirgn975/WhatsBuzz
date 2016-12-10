import 'rxjs/add/operator/switchMap';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { RecommandationService } from '../services/recommandation.service';
import * as recommendations from '../actions/recommendations';
import * as detailPost from '../actions/detail-post';


@Injectable()
export class RecommandationEffects {
  constructor(private actions$: Actions, private recommandationService: RecommandationService) { }

    @Effect()
    loadRecommendations$: Observable<Action>= this.actions$
      .ofType(detailPost.ActionTypes.LOAD_DETAIL_POST_SUCCESS)
      .switchMap((category) => this.recommandationService.getRecommendation(category.payload.age_categories))
      .map(recommendationsData => new recommendations.LoadRecommendationsSuccessAction(recommendationsData));

}
