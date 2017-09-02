import 'rxjs/add/operator/switchMap';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { BuzzService } from '../services/buzz.service';
import * as buzz from '../actions/buzz';

@Injectable()
export class BuzzEffects {
  constructor(
    private actions$: Actions,
    private buzzService: BuzzService
  ) { }

  @Effect()
  loadBuzz$: Observable<Action>= this.actions$
    .ofType(buzz.LOAD_BUZZ)
    .switchMap(_ => this.buzzService.getBuzz()
      .map(BuzzData => new buzz.LoadBuzzSuccessAction(BuzzData))
      // .catch(error => Observable.of(getPostsFail(error)))
    );

}
