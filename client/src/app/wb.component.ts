import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from './reducers';
import * as fbAction from './actions/fb';

@Component({
  selector: 'wb-root',
  templateUrl: './wb.component.html',
  styleUrls: ['./wb.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WbComponent implements OnInit {

  constructor(
    private store: Store<fromRoot.State>,
  ) { }

  ngOnInit() {
    this.store.dispatch(new fbAction.InitFacebookServiceAction());
  }
}
