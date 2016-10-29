import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/takeUntil';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { empty } from 'rxjs/observable/empty';
import { of } from 'rxjs/observable/of';

import * as buzz from '../actions/buzz';
import { BuzzService } from '../services'


@Injectable()
export class BuzzEffects {
  constructor(
    private actions$: Actions,
    private buzzService: BuzzService,
  ) { }


  @Effect() loadBuzz$ = this.actions$
  .ofType(buzz.ActionTypes.LOAD)
  .switchMap(() => this.buzzService.getBuzzPosts())
  .map(buzz => new buzz.LoadSuccessAction(buzz));
}
