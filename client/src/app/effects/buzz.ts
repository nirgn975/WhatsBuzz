import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';

// import { BuzzActions } from '../actions';
import { BuzzService } from '../services';

@Injectable()
export class BuzzEffects {
    constructor (
      private update$: Actions,
      // private buzzActions: BuzzActions,
      private svc: BuzzService,
    ) {}

    // @Effect() loadBuzz$ = this.update$
    //   .ofType(BuzzActions.LOAD_BUZZS)
    //   .switchMap(() => this.svc.getBuzzPosts())
    //   .map(buzzs => this.buzzActions.loadBuzzsSuccess(buzzs));
}
