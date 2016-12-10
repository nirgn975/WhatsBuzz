import { Action } from '@ngrx/store';
import { PrePost } from '../models/pre-post';
import { type } from '../util';


export const ActionTypes = {
  LOAD_RECOMMENDATIONS:         type('[Recommendations] Load Recommendations'),
  LOAD_RECOMMENDATIONS_SUCCESS: type('[Recommendations] Load Recommendations Success'),
};

export class LoadRecommendationsAction implements Action {
  type = ActionTypes.LOAD_RECOMMENDATIONS;

  constructor(public payload: string) { }
}

export class LoadRecommendationsSuccessAction implements Action {
  type = ActionTypes.LOAD_RECOMMENDATIONS_SUCCESS;

  constructor(public payload: PrePost[]) { }
}

export type Actions
  = LoadRecommendationsAction
  | LoadRecommendationsSuccessAction;
