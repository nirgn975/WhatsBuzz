import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { AppState } from '../../reducers';
import { FacebookGamesActions, TrendsActions } from '../../actions';

@Component({
  selector: 'wb-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  private facebookGames: Observable<any>;
  private trends: Observable<any>;

  constructor(
    private store: Store<AppState>,
    private facebookGamesActions: FacebookGamesActions,
    private trendsActions: TrendsActions,
  ) {
    this.facebookGames = store.select('facebookGames');
    this.trends = store.select('trends');
  }

  ngOnInit() {
    this.store.dispatch(this.facebookGamesActions.loadPosts());
    this.store.dispatch(this.trendsActions.loadPosts());
  }

}
