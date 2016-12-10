import { createSelector } from 'reselect';
import { PrePost } from '../models/pre-post';
import * as buzz from '../actions/buzz';


export type  State = PrePost[];

const initialState: State = [{
  unique_id: '',
  title: '',
  banner_image: '',
}];

export function reducer(state = initialState, action: buzz.Actions): State {
  switch (action.type) {
    case buzz.ActionTypes.LOAD_BUZZS: {
      return initialState;
    }

    case buzz.ActionTypes.LOAD_BUZZS_SUCCESS: {
      return action.payload;
    }

    default: {
      return state;
    }
  }
}
