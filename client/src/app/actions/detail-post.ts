import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

@Injectable()
export class DetailPostActions {
  static LOAD_DETAIL_POST = '[DetailPost] Load Detail Post';
  loadDetailPost(postId): Action {
    return {
      type: DetailPostActions.LOAD_DETAIL_POST,
      payload: postId
    };
  }

  static LOAD_DETAIL_POST_SUCCESS = '[DetailPost] Load Detail Post Success';
  loadDetailPostSuccess(detailPost): Action {
    return {
      type: DetailPostActions.LOAD_DETAIL_POST_SUCCESS,
      payload: detailPost
    };
  }

  static LOAD_FACEBOOK_GAME = '[DetailPost] Load Facebook Game';
  loadFacebookGamePost(data): Action {
    return {
      type: DetailPostActions.LOAD_FACEBOOK_GAME,
      payload: data
    };
  }

  static LOAD_FACEBOOK_GAME_SUCCESS = '[DetailPost] Load Facebook Game Success';
  loadFacebookGameSuccess(gameCode): Action {
    return {
      type: DetailPostActions.LOAD_FACEBOOK_GAME_SUCCESS,
      payload: gameCode
    };
  }
}
