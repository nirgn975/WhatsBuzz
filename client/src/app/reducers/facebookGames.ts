import { PostResponse } from '../models/post';
import * as facebookGames from '../actions/facebookGames';

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

export function reducer(state = initialState, action: facebookGames.Actions): State {
  switch (action.type) {
    case facebookGames.LOAD_FACEBOOK_GAMES_POSTS: {
      return initialState;
    }

    case facebookGames.LOAD_FACEBOOK_GAMES_POSTS_SUCCESS: {
      return Object.assign({}, state, action.payload);
    }

    default: {
      return state;
    }
  }
}

export const getEntities = (state: State) => state.results;
