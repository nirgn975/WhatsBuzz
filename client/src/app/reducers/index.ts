import '@ngrx/core/add/operator/select';
import { compose } from '@ngrx/core/compose';
import { combineReducers } from '@ngrx/store';

import buzzReducer, * as fromBuzz from './buzz';

export interface AppState {
  buzz: fromBuzz.BuzzState;
};

export default compose(combineReducers)({
  buzz: buzzReducer
});
