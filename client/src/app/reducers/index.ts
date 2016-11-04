import '@ngrx/core/add/operator/select';
import { compose } from '@ngrx/core/compose';
import { combineReducers } from '@ngrx/store';

import buzzReducer, * as fromBuzz from './buzz';
import facebookGamesReducer, * as fromFacebookGames from './facebookGames';
import trendsReducer, * as fromTrends from './trends';

export interface AppState {
  buzz: fromBuzz.BuzzState;
  facebookGames: fromFacebookGames.FacebookGamesState;
  trends: fromTrends.TrendsState;
};

export default compose(combineReducers)({
  buzz: buzzReducer,
  facebookGames: facebookGamesReducer,
  trends: trendsReducer
});
