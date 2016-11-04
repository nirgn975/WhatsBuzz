import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

@Injectable()
export class TrendsActions {
  static LOAD_POSTS = '[Buzz] Load Trends Posts';
  loadPosts(): Action {
    return {
      type: TrendsActions.LOAD_POSTS
    };
  }

  static LOAD_POSTS_SUCCESS = '[Buzz] Load Trends Posts Success';
  loadPostsSuccess(posts): Action {
    return {
      type: TrendsActions.LOAD_POSTS_SUCCESS,
      payload: posts
    };
  }
}
