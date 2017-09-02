import { Action } from '@ngrx/store';
import { BuzzResponse } from '../models/buzz';

export const LOAD_BUZZ = '[Buzz] Load Buzz';
export const LOAD_BUZZ_SUCCESS = '[Buzz] Load Buzz Success';
export const LOAD_BUZZ_ERROR = '[Buzz] Load Buzz Error';

export class LoadBuzzAction implements Action {
  readonly type = LOAD_BUZZ;

  constructor() { }
}

export class LoadBuzzSuccessAction implements Action {
  readonly type = LOAD_BUZZ_SUCCESS;

  constructor(public payload: BuzzResponse) { }
}

export class LoadBuzzError implements Action {
  readonly type = LOAD_BUZZ_ERROR;

  constructor() { }
}

export type Actions
  = LoadBuzzAction
  | LoadBuzzSuccessAction
  | LoadBuzzError;
