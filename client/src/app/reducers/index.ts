// import '@ngrx/core/add/operator/select';
// import { compose } from '@ngrx/core/compose';
// import { combineReducers } from '@ngrx/store';
//
// import buzzReducer, * as fromBuzz from './buzz';
// import facebookGamesReducer, * as fromFacebookGames from './facebookGames';
// import trendsReducer, * as fromTrends from './trends';
// import pagesReducer, * as fromPages from './pages';
// import detailPostReducer, * as fromDetailPost from './detail-post';
// import recommandationReducer, * as fromRecommandation from './recommandation';
//
// export interface AppState {
//   buzz: fromBuzz.BuzzState;
//   facebookGames: fromFacebookGames.FacebookGamesState;
//   trends: fromTrends.TrendsState;
//   pages: fromPages.PagesState;
//   detailPost: fromDetailPost.DetailPostState;
//   recommandations: fromRecommandation.RecommendationsState;
// };
//
// export default compose(combineReducers)({
//   buzz: buzzReducer,
//   facebookGames: facebookGamesReducer,
//   trends: trendsReducer,
//   pages: pagesReducer,
//   detailPost: detailPostReducer,
//   recommandations: recommandationReducer
// });

import { createSelector } from 'reselect';
import { ActionReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { PrePost } from '../models';


import { compose } from '@ngrx/core/compose';
import { storeFreeze } from 'ngrx-store-freeze';
import { combineReducers } from '@ngrx/store';


import * as fromBuzz from './buzz';


export interface State {
  buzz: fromBuzz.State;
}

const reducers = {
  buzz: fromBuzz.reducer,
};

const developmentReducer: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
  if (environment.production) {
    return productionReducer(state, action);
  }
  else {
    return developmentReducer(state, action);
  }
}


export const getBuzzState = (state: State) => state.buzz;

export const getBuzzEntities = createSelector(getBuzzState, fromBuzz.getEntities);
