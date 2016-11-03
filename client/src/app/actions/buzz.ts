import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

@Injectable()
export class BuzzActions {
  static LOAD_BUZZS = '[Buzz] Load Buzzs';
  loadBuzzs(): Action {
    return {
      type: BuzzActions.LOAD_BUZZS
    };
  }

  static LOAD_BUZZS_SUCCESS = '[Buzz] Load Buzzs Success';
  loadBuzzsSuccess(buzzs): Action {
    return {
      type: BuzzActions.LOAD_BUZZS_SUCCESS,
      payload: buzzs
    };
  }
}
