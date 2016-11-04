import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

@Injectable()
export class FacebookGamesActions {
  static LOAD_POSTS = '[Buzz] Load FacebookGames Posts';
  loadPosts(): Action {
    return {
      type: FacebookGamesActions.LOAD_POSTS
    };
  }

  static LOAD_POSTS_SUCCESS = '[Buzz] Load FacebookGames Posts Success';
  loadPostsSuccess(posts): Action {
    return {
      type: FacebookGamesActions.LOAD_POSTS_SUCCESS,
      payload: posts
    };
  }
}
