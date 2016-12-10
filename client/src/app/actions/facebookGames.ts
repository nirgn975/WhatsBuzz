import { Action } from '@ngrx/store';
import { type } from '../util';


export const ActionTypes = {
  LOAD_POSTS:              type('[FacebookGames] Load FacebookGames Posts'),
  LOAD_POSTS_SUCCESS:      type('[FacebookGames] Load FacebookGames Posts Success'),
  LOAD_MORE_POSTS:         type('[FacebookGames] Load More FacebookGames Posts'),
  LOAD_MORE_POSTS_SUCCESS: type('[FacebookGames] Load More FacebookGames Posts Success'),
};

export class LoadPostsAction implements Action {
  type = ActionTypes.LOAD_POSTS;

  constructor(public payload: number) { }
}

export class LoadPostsSuccessAction implements Action {
  type = ActionTypes.LOAD_POSTS_SUCCESS;

  constructor(public payload: any) { }
}

export class LoadMorePostsAction implements Action {
  type = ActionTypes.LOAD_MORE_POSTS;

  constructor(public payload: number) { }
}

export class LoadMorePostsSuccessAction implements Action {
  type = ActionTypes.LOAD_MORE_POSTS_SUCCESS;

  constructor(public payload: any) { }
}

export type Actions
  = LoadPostsAction
  | LoadPostsSuccessAction
  | LoadMorePostsAction
  | LoadMorePostsSuccessAction;
