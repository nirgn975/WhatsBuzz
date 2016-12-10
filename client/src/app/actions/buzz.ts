// import { Injectable } from '@angular/core';
// import { Action } from '@ngrx/store';
//
// @Injectable()
// export class BuzzActions {
//   static LOAD_BUZZS = '[Buzz] Load Buzzs';
//   loadBuzzs(): Action {
//     return {
//       type: BuzzActions.LOAD_BUZZS
//     };
//   }
//
//   static LOAD_BUZZS_SUCCESS = '[Buzz] Load Buzzs Success';
//   loadBuzzsSuccess(buzzs): Action {
//     return {
//       type: BuzzActions.LOAD_BUZZS_SUCCESS,
//       payload: buzzs
//     };
//   }
// }

import { Action } from '@ngrx/store';
import { PrePost } from '../models';
import { type } from '../util';


export const ActionTypes = {
  LOAD_BUZZS:         type('[Buzz] Load Buzzs'),
  LOAD_BUZZS_SUCCESS: type('[Buzz] Load Buzzs Success'),
};

export class LoadBuzzsAction implements Action {
  type = ActionTypes.LOAD_BUZZS;

  constructor() { }
}

export class LoadBuzzsSuccessAction implements Action {
  type = ActionTypes.LOAD_BUZZS_SUCCESS;

  constructor(public payload: PrePost[]) { }
}

export type Actions
  = LoadBuzzsAction
  | LoadBuzzsSuccessAction;
