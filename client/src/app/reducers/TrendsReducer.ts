import { Action } from 'redux';
import { Trend } from '../models';

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
  entites: {},
  currentTrendId: null
};
