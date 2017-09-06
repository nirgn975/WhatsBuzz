import { Action } from '@ngrx/store';
import { PostResponse } from '../models/post';

export const INIT_FACEBOOK_SERVICE = '[FB] Init Facebook Service';
export const INIT_FACEBOOK_SERVICE_SUCCESS = '[FB] Init Facebook Service Success';

export class InitFacebookServiceAction implements Action {
  readonly type = INIT_FACEBOOK_SERVICE;

  constructor() { }
}

export class InitFacebookServiceSuccessAction implements Action {
  readonly type = INIT_FACEBOOK_SERVICE_SUCCESS;

  constructor() { }
}

export type Actions
  = InitFacebookServiceAction
  | InitFacebookServiceSuccessAction;
