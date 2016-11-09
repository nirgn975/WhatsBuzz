import { Action } from '@ngrx/store';

import { DetailPost } from '../models';
import { DetailPostActions } from '../actions';

export type DetailPostState = DetailPost;

const initialState: DetailPostState = {
  unique_id: '',
  title: '',
  body: '',
  banner_image: '',
  age_category: ''
};

export default function (state = initialState, action: Action): DetailPostState {
  switch (action.type) {
    case DetailPostActions.LOAD_DETAIL_POST: {
      return initialState;
    }
    case DetailPostActions.LOAD_DETAIL_POST_SUCCESS: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
