import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { AppState } from '../../reducers';
import { BuzzActions } from '../../actions';
// import { Buzz } from '../../models';

@Component({
  selector: 'wb-buzz',
  templateUrl: './buzz.component.html',
  styleUrls: ['./buzz.component.scss']
})
export class BuzzComponent implements OnInit {
  private buzz: Observable<any>;

  constructor(
    private store: Store<AppState>,
    private buzzActions: BuzzActions,
  ) {
    this.buzz = store.select('buzz');
  }

  ngOnInit() {
    this.store.dispatch(this.buzzActions.loadBuzzs());
  }
}
