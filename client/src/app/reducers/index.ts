import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector,
  ActionReducer,
} from '@ngrx/store';
import { environment } from '../../environments/environment';

/**
 * Every reducer module's default export is the reducer function itself. In
 * addition, each module should export a type or interface that describes
 * the state of the reducer plus any selector functions. The `* as`
 * notation packages up all of the exports into a single object.
 */

 import * as fromFacebookGames from './facebookGames';
 import * as fromTrends from './trends';
 import * as fromBuzz from './buzz';

/**
 * As mentioned, we treat each reducer like a table in a database. This means
 * our top level state interface is just a map of keys to inner state types.
 */
export interface State {
  facebookGames: fromFacebookGames.State;
  trends: fromTrends.State;
  buzz: fromBuzz.State;
}

/**
 * Our state is composed of a map of action reducer functions.
 * These reducer functions are called with each dispatched action
 * and the current or initial state and return a new immutable state.
 */
export const reducers: ActionReducerMap<State> = {
  facebookGames: fromFacebookGames.reducer,
  trends: fromTrends.reducer,
  buzz: fromBuzz.reducer,
};

/**
 * Layout Reducers
 */
export const getFacebookGamesState = createFeatureSelector<fromFacebookGames.State>('facebookGames');
export const getTrendsState = createFeatureSelector<fromTrends.State>('trends');
export const getBuzzState = createFeatureSelector<fromBuzz.State>('buzz');


export const getFacebookGamesEntities = createSelector(
  getFacebookGamesState,
  fromFacebookGames.getEntities
);

export const getTrendsEntities = createSelector(
  getTrendsState,
  fromTrends.getEntities
);

export const getBuzzEntities = createSelector(
  getBuzzState,
  fromBuzz.getEntities
);

export const getFacebookGamesNextPage = createSelector(
  getFacebookGamesState,
  fromFacebookGames.getNextPage
);

export const getTrendsNextPage = createSelector(
  getTrendsState,
  fromTrends.getNextPage
);
