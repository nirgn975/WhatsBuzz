import { Action } from '@ngrx/store';
import { PostResponse } from '../models/post';

export const LOAD_TRENDS_POSTS = '[Post] Load Trends Posts';
export const LOAD_TRENDS_POSTS_SUCCESS = '[Post] Load Trends Posts Success';
export const LOAD_TRENDS_POSTS_ERROR = '[Post] Load Trends Posts Error';
export const LOAD_TRENDS_NEXT_POSTS = '[Post] Load Trends Next Posts';
export const LOAD_TRENDS_NEXT_POSTS_SUCCESS = '[Post] Load Trends Next Posts Success';
export const LOAD_TRENDS_NEXT_POSTS_ERROR = '[Post] Load Trends Next Posts Error';

export class LoadTrendsPostsAction implements Action {
  readonly type = LOAD_TRENDS_POSTS;

  constructor() { }
}

export class LoadTrendsPostsSuccessAction implements Action {
  readonly type = LOAD_TRENDS_POSTS_SUCCESS;

  constructor(public payload: PostResponse) { }
}

export class LoadTrendsPostsError implements Action {
  readonly type = LOAD_TRENDS_POSTS_ERROR;

  constructor() { }
}

export class LoadTrendsNextPostsAction implements Action {
  readonly type = LOAD_TRENDS_NEXT_POSTS;

  constructor(public payload: string) { }
}

export class LoadTrendsNextPostsSuccessAction implements Action {
  readonly type = LOAD_TRENDS_NEXT_POSTS_SUCCESS;

  constructor(public payload: PostResponse) { }
}

export class LoadTrendsNextPostsError implements Action {
  readonly type = LOAD_TRENDS_NEXT_POSTS_ERROR;

  constructor() { }
}

export type Actions
  = LoadTrendsPostsAction
  | LoadTrendsPostsSuccessAction
  | LoadTrendsPostsError
  | LoadTrendsNextPostsAction
  | LoadTrendsNextPostsSuccessAction
  | LoadTrendsNextPostsError;
