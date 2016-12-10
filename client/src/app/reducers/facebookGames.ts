import { createSelector } from 'reselect';
import { PrePost } from '../models/pre-post';
import * as facebookGames from '../actions/facebookGames';


export type  State = PrePost[];

const initialState: State = [{
  unique_id: '',
  title: '',
  banner_image: '',
}];

export function reducer(state = initialState, action: facebookGames.Actions): State {
  switch (action.type) {
    case facebookGames.ActionTypes.LOAD_POSTS: {
      return initialState;
    }

    case facebookGames.ActionTypes.LOAD_POSTS_SUCCESS: {
      return action.payload;
    }

    case facebookGames.ActionTypes.LOAD_MORE_POSTS_SUCCESS: {
      return state.concat(action.payload);
    }

    default: {
      return state;
    }
  }
}
