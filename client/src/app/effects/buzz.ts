import 'rxjs/add/operator/switchMap';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { BuzzService } from '../services/buzz.service';
import * as buzz from '../actions/buzz';


@Injectable()
export class BuzzEffects {
  constructor(private actions$: Actions, private buzzService: BuzzService) { }

    @Effect()
    loadBuzz$: Observable<Action>= this.actions$
      .ofType(buzz.ActionTypes.LOAD_BUZZS)
      .switchMap(() => this.buzzService.getBuzzPosts())
      .map(buzzs => new buzz.LoadBuzzsSuccessAction(buzzs));
}
