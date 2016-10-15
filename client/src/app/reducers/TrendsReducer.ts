import { Action } from 'redux';
import { Trend } from '../models';
import { TrendActions } from '../actions';
import { createSelector } from 'reselect';

export interface TrendsEntities {
  [id: string]: Trend;
}

export interface TrendsState {
  ids: string[];
  entities: TrendsEntities;
  currentTrendId?: string;
};

const initialState: TrendsState = {
  ids: [],
  currentTrendId: null,
  entities: {}
};

export const TrendsReducer =
  function(state: TrendsState = initialState, action: Action): TrendsState {
  switch (action.type) {

    // Select a particular thread in the UI
    case TrendActions.SELECT_TREND: {
      const trend = (<TrendActions.SelectTrendAction>action).trend;
      const oldTrend = state.entities[trend.id];

      // give them to this new thread
      const newTrend = Object.assign({}, oldTrend, {
      });

      return {
        ids: state.ids,
        currentTrendId: trend.id,
        entities: Object.assign({}, state.entities, {
          [trend.id]: newTrend
        })
      };
    }

    default:
      return state;
  }
};

export const getTrendsState = (state): TrendsState => state.threads;

export const getTrendsEntities = createSelector(
  getTrendsState,
  ( state: TrendsState ) => state.entities );

export const getAllTrends = createSelector(
  getTrendsEntities,
  ( entities: TrendsEntities ) => Object.keys(entities)
                        .map((threadId) => entities[threadId]));
