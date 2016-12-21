import { Action } from '@ngrx/store';
import { DetailPost } from '../models/detail-post';
import { PrePost } from '../models/pre-post';
import { type } from '../util';


export const ActionTypes = {
  LOAD_DETAIL_POST:           type('[DetailPost] Load Detail Post'),
  LOAD_DETAIL_POST_SUCCESS:   type('[DetailPost] Load Detail Post Success'),
  LOAD_FACEBOOK_GAME:         type('[DetailPost] Load Facebook Game'),
  LOAD_FACEBOOK_GAME_SUCCESS: type('[DetailPost] Load Facebook Game Success'),
};

export class LoadDetailPostAction implements Action {
  type = ActionTypes.LOAD_DETAIL_POST;

  constructor(public payload: string) { }
}

export class LoadDetailPostSuccessAction implements Action {
  type = ActionTypes.LOAD_DETAIL_POST_SUCCESS;

  constructor(public payload: DetailPost) { }
}

export class LoadFacebookGamePostAction implements Action {
  type = ActionTypes.LOAD_FACEBOOK_GAME;

  constructor(public payload: any) { }
}

export class LoadFacebookGameSuccessAction implements Action {
  type = ActionTypes.LOAD_FACEBOOK_GAME_SUCCESS;

  constructor(public payload: any) { }
}

export type Actions
  = LoadDetailPostAction
  | LoadDetailPostSuccessAction
  | LoadFacebookGamePostAction
  | LoadFacebookGameSuccessAction;
