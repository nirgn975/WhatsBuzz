import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/let';
import { Observable } from 'rxjs/Observable';
import { combineLatest } from 'rxjs/observable/combineLatest';
import { Buzz } from '../models';
import * as buzz from '../actions/buzz';

export interface State {
  ids: string[];
  entities: { [id: string]: Buzz };
};

const initialState: State = {
  ids: [],
  entities: {},
};

export function reducer(state = initialState, action: buzz.Actions): State {
  switch (action.type) {
    case buzz.ActionTypes.LOAD: {
      console.log("in load");

      return {
        ids: [],
        entities: {}
      }
    }

    case buzz.ActionTypes.LOAD_BUZZ_SUCCESS: {
      const buzz = action.payload;
      console.log("in load success");
      console.log(buzz);

      return {
        ids: [],
        entities: {}
      }

      // return {
      //   ids: [ ...state.ids, buzz.id ],
      //   entities: Object.assign({}, state.entities, {
      //     [buzz.id]: buzz
      //   })
      // };
    }

    default: {
      return state;
    }
  }
}

export function getBuzzEntities(state$: Observable<State>) {
  return state$.select(state => state.entities);
}

export function getBuzzIds(state$: Observable<State>) {
  return state$.select(state => state.ids);
}
