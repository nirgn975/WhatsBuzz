import 'rxjs/add/operator/switchMap';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { BuzzService } from '../services/buzz.service';
import * as buzz from '../actions/buzz';


/**
 * Effects offer a way to isolate and easily test side-effects within your
 * application. StateUpdates is an observable of the latest state and
 * dispatched action. The `toPayload` helper function returns just
 * the payload of the currently dispatched action, useful in
 * instances where the current state is not necessary.
 *
 * If you are unfamiliar with the operators being used in these examples, please
 * check out the sources below:
 *
 * Official Docs: http://reactivex.io/rxjs/manual/overview.html#categories-of-operators
 * RxJS 5 Operators By Example: https://gist.github.com/btroncone/d6cf141d6f2c00dc6b35
 */

@Injectable()
export class BuzzEffects {
  constructor(private actions$: Actions, private buzzService: BuzzService) { }

    @Effect()
    loadBuzz$: Observable<Action>= this.actions$
      .ofType(buzz.ActionTypes.LOAD_BUZZS)
      .switchMap(() => this.buzzService.getBuzzPosts())
      .map(buzzs => new buzz.LoadBuzzsSuccessAction(buzzs));
}
