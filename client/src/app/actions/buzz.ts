import { Action } from '@ngrx/store';
import { PrePost } from '../models/pre-post';
import { type } from '../util';


export const ActionTypes = {
  LOAD_BUZZS:         type('[Buzz] Load Buzzs'),
  LOAD_BUZZS_SUCCESS: type('[Buzz] Load Buzzs Success'),
};

export class LoadBuzzsAction implements Action {
  type = ActionTypes.LOAD_BUZZS;

  constructor() { }
}

export class LoadBuzzsSuccessAction implements Action {
  type = ActionTypes.LOAD_BUZZS_SUCCESS;

  constructor(public payload: PrePost[]) { }
}

export type Actions
  = LoadBuzzsAction
  | LoadBuzzsSuccessAction;
