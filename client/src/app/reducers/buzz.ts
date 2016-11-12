import { Action } from '@ngrx/store';

import { PrePost } from '../models';
import { BuzzActions } from '../actions';

export type BuzzState = PrePost[];

const initialState: BuzzState = [{
  unique_id: '',
  title: '',
  banner_image: ''
}];

export default function (state = initialState, action: Action): BuzzState {
  switch (action.type) {
    case BuzzActions.LOAD_BUZZS: {
      return initialState;
    }
    case BuzzActions.LOAD_BUZZS_SUCCESS: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
