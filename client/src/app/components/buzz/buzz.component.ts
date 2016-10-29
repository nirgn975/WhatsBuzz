import 'rxjs/add/operator/let';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../reducers';
import * as buzz from '../../actions/buzz';
import { Buzz } from '../../models';

@Component({
  selector: 'wb-buzz',
  templateUrl: './buzz.component.html',
  styleUrls: ['./buzz.component.scss']
})
export class BuzzComponent {
  buzz: Observable<any>;

  constructor(
    private store: Store<fromRoot.State>
  ) {
    this.buzz = this.store.let(fromRoot.getBuzzEntities);
  }

  ngOnInit() {
    this.store.dispatch(new buzz.LoadAction());
  }
}
