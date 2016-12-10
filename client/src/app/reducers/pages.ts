import { createSelector } from 'reselect';
import { Pages } from '../models/pages';
import * as pages from '../actions/pages';


export type  State = Pages;

const initialState: State = {
  facebookGames: 1,
  trends: 1,
};

export function reducer(state = initialState, action: pages.Actions): State {
  switch (action.type) {
    case pages.ActionTypes.NEXT_FACEBOOKGAMES_PAGE: {
      return {
        facebookGames: state.facebookGames + 1,
        trends: state.trends
      };
    }

    case pages.ActionTypes.NEXT_TRENDS_PAGE: {
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
