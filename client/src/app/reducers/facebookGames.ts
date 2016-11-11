import { Action } from '@ngrx/store';

import { FacebookGame } from '../models';
import { FacebookGamesActions } from '../actions';

export type FacebookGamesState = FacebookGame[];

const initialState: FacebookGamesState = [{
  unique_id: '',
  title: '',
  banner_image: '',
}];

export default function (state = initialState, action: Action): FacebookGamesState {
  switch (action.type) {
    case FacebookGamesActions.LOAD_POSTS: {
      return initialState;
    }
    case FacebookGamesActions.LOAD_POSTS_SUCCESS: {
      return action.payload;
    }
    case FacebookGamesActions.LOAD_MORE_POSTS_SUCCESS: {
      return state.concat(action.payload);
    }
    default: {
      return state;
    }
  }
}
