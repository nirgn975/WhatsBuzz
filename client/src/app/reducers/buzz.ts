import { Action } from '@ngrx/store';

import { Buzz } from '../models';
import { BuzzActions } from '../actions';

export type BuzzState = Buzz;

const initialState: BuzzState = {
  unique_id: '',
  title: '',
  banner_image: ''
};

export default function (state = initialState, action: Action): BuzzState {
    switch (action.type) {
        case BuzzActions.LOAD_BUZZS: {
            return initialState;
        }
        case BuzzActions.GET_BUZZ_SUCCESS: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
}
