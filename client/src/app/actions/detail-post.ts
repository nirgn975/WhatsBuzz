import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

@Injectable()
export class DetailPostActions {
  static LOAD_DETAIL_POST = '[DetailPost] Load Buzzs';
  loadDetailPost(postId): Action {
    return {
      type: DetailPostActions.LOAD_DETAIL_POST,
      payload: postId
    };
  }

  static LOAD_DETAIL_POST_SUCCESS = '[DetailPost] Load Buzzs Success';
  loadDetailPostSuccess(detailPost): Action {
    return {
      type: DetailPostActions.LOAD_DETAIL_POST_SUCCESS,
      payload: detailPost
    };
  }
}
