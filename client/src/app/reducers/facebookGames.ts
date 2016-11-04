import { Action } from '@ngrx/store';

import { FacebookGame } from '../models';
import { FacebookGamesActions } from '../actions';

export type FacebookGamesState = FacebookGame[];

const initialState: FacebookGamesState = [{
  unique_id: '',
  title: '',
  body: '',
  banner_image: '',
  buzz: false,
  age_category: ''
}];

export default function (state = initialState, action: Action): FacebookGamesState {
  switch (action.type) {
    case FacebookGamesActions.LOAD_POSTS: {
      return initialState;
    }
    case FacebookGamesActions.LOAD_POSTS_SUCCESS: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
