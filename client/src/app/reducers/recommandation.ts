import { createSelector } from 'reselect';
import { PrePost } from '../models/pre-post';
import * as recommendations from '../actions/recommendations';


export type  State = PrePost[];

const initialState: State = [{
  unique_id: '',
  title: '',
  banner_image: '',
}];

export function reducer(state = initialState, action: recommendations.Actions): State {
  switch (action.type) {
    case recommendations.ActionTypes.LOAD_RECOMMENDATIONS: {
      return initialState;
    }

    case recommendations.ActionTypes.LOAD_RECOMMENDATIONS_SUCCESS: {
      return action.payload;
    }

    default: {
      return state;
    }
  }
}
