import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { AppState } from '../../reducers';
import { BuzzActions } from '../../actions';
import { Buzz } from '../../models';

@Component({
  selector: 'wb-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.scss']
})
export class RecommendationsComponent implements OnInit {
  private buzz: Observable<Buzz[]>;

  constructor(
    private store: Store<AppState>,
    private buzzActions: BuzzActions,
  ) {
    this.buzz = store.select(state => state.buzz);
  }

  ngOnInit() {
    this.store.dispatch(this.buzzActions.loadBuzzs());
  }
}
