import 'rxjs/add/operator/switchMap';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

import { Buzz } from '../models';

@Injectable()
export class BuzzActions {
    static LOAD_BUZZ = '[Buzz] Load Buzz';
    loadBuzz(): Action {
        return {
            type: BuzzActions.LOAD_BUZZ
        };
    }

    static LOAD_BUZZ_SUCCESS = '[Buzz] Load Buzz Success';
    loadBuzzSuccess(buzz): Action {
        return {
            type: BuzzActions.LOAD_BUZZ_SUCCESS,
            payload: buzz
        };
    }
}
