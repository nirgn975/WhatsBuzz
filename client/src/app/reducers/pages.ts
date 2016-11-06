import { Action } from '@ngrx/store';

import { Pages } from '../models';
import { PagesActions } from '../actions';

export type PagesState = Pages;

const initialState: PagesState = {
  facebookGames: 1,
  trends: 1
};

export default function (state = initialState, action: Action): PagesState {
  switch (action.type) {
    case PagesActions.NEXT_FACEBOOKGAMES_PAGE: {
      return {
        facebookGames: state.facebookGames + 1,
        trends: state.trends
      };
    }
    case PagesActions.NEXT_TRENDS_PAGE: {
      return {
        facebookGames: state.facebookGames,
        trends: state.trends + 1
      };
    }
    default: {
      return state;
    }
  }
}
