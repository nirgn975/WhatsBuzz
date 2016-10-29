import { Action } from '@ngrx/store';
import { Buzz } from '../models';
import { type } from '../util';

export const ActionTypes = {
  LOAD: type('[Buzz] Load'),
  LOAD_BUZZ_SUCCESS: type('[Buzz] Load Buzz Success'),
};

export class LoadAction implements Action {
  type = ActionTypes.LOAD;

  constructor() { }
}

export class LoadSuccessAction implements Action {
  type = ActionTypes.LOAD_BUZZ_SUCCESS;

  constructor(public payload: Buzz[]) { }
}

export type Actions
  = LoadAction
  | LoadSuccessAction;
