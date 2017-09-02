import { BuzzResponse } from '../models/buzz';
import * as buzz from '../actions/buzz';

export type  State = BuzzResponse;

const initialState: State = {
  count: 0,
  next: '',
  previous: '',
  results: [{
    unique_id: '',
    title: '',
    banner_image: '',
  }],
};

export function reducer(state = initialState, action: buzz.Actions): State {
  switch (action.type) {
    case buzz.LOAD_BUZZ: {
      return initialState;
    }

    case buzz.LOAD_BUZZ_SUCCESS: {
      return Object.assign({}, state, action.payload);
    }

    default: {
      return state;
    }
  }
}

export const getEntities = (state: State) => state.results;
