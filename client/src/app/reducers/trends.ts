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
    banner_image: '',
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

    case trends.LOAD_TRENDS_NEXT_POSTS_SUCCESS: {
      return {
        count: action.payload.count,
        next: action.payload.next,
        previous: action.payload.previous,
        results: state.results.concat(action.payload.results),
      };
    }

    default: {
      return state;
    }
  }
}

export const getEntities = (state: State) => state.results;
export const getNextPage = (state: State) => state.next;
