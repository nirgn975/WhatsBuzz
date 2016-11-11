import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

@Injectable()
export class TrendsActions {
  static LOAD_POSTS = '[Trends] Load Trends Posts';
  loadPosts(page): Action {
    return {
      type: TrendsActions.LOAD_POSTS,
      payload: page
    };
  }

  static LOAD_POSTS_SUCCESS = '[Trends] Load Trends Posts Success';
  loadPostsSuccess(posts): Action {
    return {
      type: TrendsActions.LOAD_POSTS_SUCCESS,
      payload: posts
    };
  }

  static LOAD_MORE_POSTS = '[Trends] Load More Trends Posts';
  loadMorePosts(nextPage): Action {
    return {
      type: TrendsActions.LOAD_MORE_POSTS,
      payload: nextPage
    };
  }

  static LOAD_MORE_POSTS_SUCCESS = '[Trends] Load More Trends Posts Success';
  loadMorePostsSuccess(posts): Action {
    return {
      type: TrendsActions.LOAD_MORE_POSTS_SUCCESS,
      payload: posts
    };
  }
}
