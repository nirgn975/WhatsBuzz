import { createSelector } from 'reselect';
import { DetailPost } from '../models/detail-post';
import * as detailPost from '../actions/detail-post';


export type  State = DetailPost;

const initialState: State = {
  unique_id: '',
  title: '',
  body: '',
  banner_image: '',
  age_category: '',
  tags: [
    {}
  ],
  content: '',
};

export function reducer(state = initialState, action: detailPost.Actions): State {
  switch (action.type) {
    case detailPost.ActionTypes.LOAD_DETAIL_POST: {
      return initialState;
    }

    case detailPost.ActionTypes.LOAD_DETAIL_POST_SUCCESS: {
      return action.payload;
    }

    case detailPost.ActionTypes.LOAD_FACEBOOK_GAME_SUCCESS: {
      return Object.assign({}, state, action.payload);
    }

    default: {
      return state;
    }
  }
}
