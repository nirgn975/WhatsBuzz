import { Action } from '@ngrx/store';
import { type } from '../util';


export const ActionTypes = {
  LOAD_RECOMMENDATIONS:         type('[Recommendations] Load Recommendations'),
  LOAD_RECOMMENDATIONS_SUCCESS: type('[Recommendations] Load Recommendations Success'),
};

export class LoadRecommendationsAction implements Action {
  type = ActionTypes.LOAD_RECOMMENDATIONS;

  constructor(public payload: any) { }
}

export class LoadRecommendationsSuccessAction implements Action {
  type = ActionTypes.LOAD_RECOMMENDATIONS_SUCCESS;

  constructor(public payload: any) { }
}

export type Actions
  = LoadRecommendationsAction
  | LoadRecommendationsSuccessAction;
