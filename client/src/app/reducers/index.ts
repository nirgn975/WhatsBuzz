import { Reducer, combineReducers } from 'redux';
import { TrendsState, TrendsReducer } from './TrendsReducer';
export * from './TrendsReducer';

export interface AppState {
  trands: TrendsState;
}

const rootReducer: Reducer<AppState> = combineReducers<AppState>({
  // trends: TrendsReducer
});

export default rootReducer;
