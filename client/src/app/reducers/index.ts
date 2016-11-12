import '@ngrx/core/add/operator/select';
import { compose } from '@ngrx/core/compose';
import { combineReducers } from '@ngrx/store';

import buzzReducer, * as fromBuzz from './buzz';
import facebookGamesReducer, * as fromFacebookGames from './facebookGames';
import trendsReducer, * as fromTrends from './trends';
import pagesReducer, * as fromPages from './pages';
import detailPostReducer, * as fromDetailPost from './detail-post';
import recommandationReducer, * as fromRecommandation from './recommandation';

export interface AppState {
  buzz: fromBuzz.BuzzState;
  facebookGames: fromFacebookGames.FacebookGamesState;
  trends: fromTrends.TrendsState;
  pages: fromPages.PagesState;
  detailPost: fromDetailPost.DetailPostState;
  recommandations: fromRecommandation.RecommendationsState;
};

export default compose(combineReducers)({
  buzz: buzzReducer,
  facebookGames: facebookGamesReducer,
  trends: trendsReducer,
  pages: pagesReducer,
  detailPost: detailPostReducer,
  recommandations: recommandationReducer
});
