// import { Action } from '@ngrx/store';
//
// import { PrePost } from '../models';
// import { BuzzActions } from '../actions';
//
// export type BuzzState = PrePost[];
//
// const initialState: BuzzState = [{
//   unique_id: '',
//   title: '',
//   banner_image: ''
// }];
//
// export default function (state = initialState, action: Action): BuzzState {
//   switch (action.type) {
//     case BuzzActions.LOAD_BUZZS: {
//       return initialState;
//     }
//     case BuzzActions.LOAD_BUZZS_SUCCESS: {
//       return action.payload;
//     }
//     default: {
//       return state;
//     }
//   }
// }

import { createSelector } from 'reselect';
import { PrePost } from '../models';
import * as buzz from '../actions/buzz';


export interface State {
  ids: string[];
  entities: { [id: string]: PrePost };
};

const initialState: State = {
  ids: [],
  entities: {},
};

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

export const getEntities = (state: State) => state.entities;

export const getIds = (state: State) => state.ids;

export const getAll = createSelector(getEntities, getIds, (entities, ids) => {
  return ids.map(id => entities[id]);
});
