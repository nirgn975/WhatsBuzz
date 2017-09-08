import { Action } from '@ngrx/store';
import { PostResponse } from '../models/post';

export const LOAD_FACEBOOK_GAMES_POSTS = '[Post] Load Facebook Games Posts';
export const LOAD_FACEBOOK_GAMES_POSTS_SUCCESS = '[Post] Load Facebook Games Posts Success';
export const LOAD_FACEBOOK_GAMES_POSTS_ERROR = '[Post] Load Facebook Games Posts Error';
export const LOAD_FACEBOOK_GAMES_NEXT_POSTS = '[Post] Load Facebook Games Next Posts';
export const LOAD_FACEBOOK_GAMES_NEXT_POSTS_SUCCESS = '[Post] Load Facebook Games Posts Next Success';
export const LOAD_FACEBOOK_GAMES_NEXT_POSTS_ERROR = '[Post] Load Facebook Games Posts Next Error';

export class LoadFacebookGamesPostsAction implements Action {
  readonly type = LOAD_FACEBOOK_GAMES_POSTS;

  constructor() { }
}

export class LoadFacebookGamesPostsSuccessAction implements Action {
  readonly type = LOAD_FACEBOOK_GAMES_POSTS_SUCCESS;

  constructor(public payload: PostResponse) { }
}

export class LoadFacebookGamesPostsError implements Action {
  readonly type = LOAD_FACEBOOK_GAMES_POSTS_ERROR;

  constructor() { }
}

export class LoadFacebookGamesNextPostsAction implements Action {
  readonly type = LOAD_FACEBOOK_GAMES_NEXT_POSTS;

  constructor(public payload: string) { }
}

export class LoadFacebookGamesNextPostsSuccessAction implements Action {
  readonly type = LOAD_FACEBOOK_GAMES_NEXT_POSTS_SUCCESS;

  constructor(public payload: PostResponse) { }
}

export class LoadFacebookGamesNextPostsError implements Action {
  readonly type = LOAD_FACEBOOK_GAMES_NEXT_POSTS_ERROR;

  constructor() { }
}

export type Actions
  = LoadFacebookGamesPostsAction
  | LoadFacebookGamesPostsSuccessAction
  | LoadFacebookGamesPostsError
  | LoadFacebookGamesNextPostsAction
  | LoadFacebookGamesNextPostsSuccessAction
  | LoadFacebookGamesNextPostsError;
