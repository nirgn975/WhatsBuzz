import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';

import { AppState } from '../reducers';
import { BuzzActions } from '../actions';
import { BuzzService } from '../services';

@Injectable()
export class BuzzEffects {
  constructor (
    private update$: Actions,
    private buzzActions: BuzzActions,
    private buzzService: BuzzService,
  ) {}

  @Effect() loadBuzz$ = this.update$
    .ofType(BuzzActions.LOAD_BUZZ)
    .switchMap(() => this.buzzService.getBuzzPosts())
    .map(buzz => this.buzzActions.loadBuzzSuccess(buzz));
}
