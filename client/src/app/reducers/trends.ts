import { Action } from '@ngrx/store';

import { Trend } from '../models';
import { TrendsActions } from '../actions';

export type TrendsState = Trend[];

const initialState: TrendsState = [{
  unique_id: '',
  title: '',
  body: '',
  banner_image: '',
  buzz: false,
  age_category: ''
}];

export default function (state = initialState, action: Action): TrendsState {
  switch (action.type) {
    case TrendsActions.LOAD_POSTS: {
      return initialState;
    }
    case TrendsActions.LOAD_POSTS_SUCCESS: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
