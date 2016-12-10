import { createSelector } from 'reselect';
import { PrePost } from '../models/pre-post';
import * as trends from '../actions/trends';


export type  State = PrePost[];

const initialState: State = [{
  unique_id: '',
  title: '',
  banner_image: '',
}];

export function reducer(state = initialState, action: trends.Actions): State {
  switch (action.type) {
    case trends.ActionTypes.LOAD_POSTS: {
      return initialState;
    }

    case trends.ActionTypes.LOAD_POSTS_SUCCESS: {
      return action.payload;
    }

    case trends.ActionTypes.LOAD_MORE_POSTS_SUCCESS: {
      return state.concat(action.payload);
    }

    default: {
      return state;
    }
  }
}
