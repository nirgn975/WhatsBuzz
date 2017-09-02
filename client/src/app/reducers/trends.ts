import { PostResponse } from '../models/post';
import * as trends from '../actions/trends';

export type  State = PostResponse;

const initialState: State = {
  count: 0,
  next: '',
  previous: '',
  results: [{
    unique_id: '',
    title: '',
    body: '',
    banner_image: '',
    age_categories: '',
    tags: [{
      'name': ''
    }],
  }],
};

export function reducer(state = initialState, action: trends.Actions): State {
  switch (action.type) {
    case trends.LOAD_TRENDS_POSTS: {
      return initialState;
    }

    case trends.LOAD_TRENDS_POSTS_SUCCESS: {
      return Object.assign({}, state, action.payload);
    }

    default: {
      return state;
    }
  }
}

export const getEntities = (state: State) => state.results;
