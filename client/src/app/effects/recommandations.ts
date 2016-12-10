import 'rxjs/add/operator/switchMap';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { RecommandationService } from '../services/recommandation.service';
import * as recommendations from '../actions/recommendations';
import * as detailPost from '../actions/detail-post';


/**
 * Effects offer a way to isolate and easily test side-effects within your
 * application. StateUpdates is an observable of the latest state and
 * dispatched action. The `toPayload` helper function returns just
 * the payload of the currently dispatched action, useful in
 * instances where the current state is not necessary.
 *
 * If you are unfamiliar with the operators being used in these examples, please
 * check out the sources below:
 *
 * Official Docs: http://reactivex.io/rxjs/manual/overview.html#categories-of-operators
 * RxJS 5 Operators By Example: https://gist.github.com/btroncone/d6cf141d6f2c00dc6b35
 */

@Injectable()
export class RecommandationEffects {
  constructor(private actions$: Actions, private recommandationService: RecommandationService) { }

    @Effect()
    loadRecommendations$: Observable<Action>= this.actions$
      .ofType(detailPost.ActionTypes.LOAD_DETAIL_POST_SUCCESS)
      .switchMap((category) => this.recommandationService.getRecommendation(category.payload.age_categories))
      .map(recommendationsData => new recommendations.LoadRecommendationsSuccessAction(recommendationsData));

}
