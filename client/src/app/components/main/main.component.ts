import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../reducers';
import * as facebookGamesActions from '../../actions/facebookGames';
import * as trendsActions from '../../actions/trends';
import * as pagesActions from '../../actions/pages';
import { PrePost } from '../../models/pre-post';
import { Pages } from '../../models/pages';

@Component({
  selector: 'wb-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  private facebookGames$: Observable<PrePost[]>;
  private trends$: Observable<PrePost[]>;
  private pages$: Pages;

  constructor(
    private store: Store<fromRoot.State>,
  ) {
    this.facebookGames$ = store.select(fromRoot.getFacebookGamesState);
    this.trends$ = store.select(fromRoot.getTrendsState);
    this.store.select(fromRoot.getPagesState).subscribe(
      (res) => this.pages$ = res
    );
  }

  ngOnInit() {
    if (this.pages$.facebookGames == 1) {
      // Only if we're on the first page.
      this.store.dispatch(new facebookGamesActions.LoadPostsAction(this.pages$.facebookGames));

      // Move to next page.
      this.store.dispatch(new pagesActions.NextFacebookGamesPageAction());
    }

    if (this.pages$.trends == 1) {
      // Only if we're on the first page.
      this.store.dispatch(new trendsActions.LoadPostsAction(this.pages$.trends));

      // Move to next page.
      this.store.dispatch(new pagesActions.NextTrendsPageAction());
    }
  }
}
