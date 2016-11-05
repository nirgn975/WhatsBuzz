import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

@Injectable()
export class FacebookGamesActions {
  static LOAD_POSTS = '[Buzz] Load FacebookGames Posts';
  loadPosts(page): Action {
    return {
      type: FacebookGamesActions.LOAD_POSTS,
      payload: page
    };
  }

  static LOAD_POSTS_SUCCESS = '[Buzz] Load FacebookGames Posts Success';
  loadPostsSuccess(posts): Action {
    return {
      type: FacebookGamesActions.LOAD_POSTS_SUCCESS,
      payload: posts
    };
  }

  static LOAD_MORE_POSTS = '[Buzz] Load More FacebookGames Posts';
  loadMorePosts(nextPage): Action {
    return {
      type: FacebookGamesActions.LOAD_MORE_POSTS,
      payload: nextPage
    };
  }

  static LOAD_MORE_POSTS_SUCCESS = '[Buzz] Load More FacebookGames Posts Success';
  loadMorePostsSuccess(posts): Action {
    return {
      type: FacebookGamesActions.LOAD_MORE_POSTS_SUCCESS,
      payload: posts
    };
  }
}
