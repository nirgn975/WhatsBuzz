import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/let';
import { Observable } from 'rxjs/Observable';
import { combineLatest } from 'rxjs/observable/combineLatest';
import { ActionReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { Buzz } from '../models';
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
    console.log("in reducer");
    return productionReducer(state, action);
  }
  else {
    return developmentReducer(state, action);
  }
}

 export function getBuzzState(state$: Observable<State>) {
  return state$.select(state => state.buzz);
}

 export const getBuzzEntities = compose(fromBuzz.getBuzzEntities, getBuzzState);
 export const getBuzzIds = compose(fromBuzz.getBuzzIds, getBuzzState);
