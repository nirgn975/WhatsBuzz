import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../reducers';
import * as buzzAction from '../../actions/buzz';
import { Buzz } from '../../models/buzz';

@Component({
  selector: 'wb-buzz',
  templateUrl: './buzz.component.html',
  styleUrls: ['./buzz.component.scss']
})
export class BuzzComponent implements OnInit {
  public buzz$: Observable<Buzz[]>;

  constructor(
    private store: Store<fromRoot.State>,
  ) {
    this.buzz$ = this.store.select(fromRoot.getBuzzEntities);
  }

  ngOnInit() {
    this.store.dispatch(new buzzAction.LoadBuzzAction());
  }

}
