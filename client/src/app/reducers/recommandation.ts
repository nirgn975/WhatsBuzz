import { Action } from '@ngrx/store';

import { Recommendation } from '../models';
import { RecommendationsActions } from '../actions';

export type RecommendationsState = Recommendation[];

const initialState: RecommendationsState = [{
  unique_id: '',
  title: '',
  banner_image: ''
}];

export default function (state = initialState, action: Action): RecommendationsState {
  switch (action.type) {
    case RecommendationsActions.LOAD_RECOMMENDATIONS: {
      return initialState;
    }
    case RecommendationsActions.LOAD_RECOMMENDATIONS_SUCCESS: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
