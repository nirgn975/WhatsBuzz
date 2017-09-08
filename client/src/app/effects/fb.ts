import 'rxjs/add/operator/switchMap';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { FbService } from '../services/fb.service';
import * as fb from '../actions/fb';

@Injectable()
export class FbEffects {
  constructor(
    private actions$: Actions,
    private fbService: FbService
  ) { }

  @Effect()
  initFB$: Observable<Action>= this.actions$
    .ofType(fb.INIT_FACEBOOK_SERVICE)
    .switchMap(_ => this.fbService.initFbService()
      .map(fbService => new fb.InitFacebookServiceSuccessAction())
      // .catch(error => Observable.of(getPostsFail(error)))
    );

}
