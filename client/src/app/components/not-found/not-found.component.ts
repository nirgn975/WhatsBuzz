import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { AppState } from '../../reducers';
import { FacebookGamesActions, TrendsActions, PagesActions } from '../../actions';
import { PrePost, Pages } from '../../models';

@Component({
  selector: 'wb-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {
  private facebookGames: Observable<PrePost[]>;
  private trends: Observable<PrePost[]>;
  private pages: Pages;

  constructor(
    private store: Store<AppState>,
    private facebookGamesActions: FacebookGamesActions,
    private trendsActions: TrendsActions,
    private pagesActions: PagesActions,
  ) {
    this.facebookGames = store.select(state => state.facebookGames);
    this.trends = store.select(state => state.trends);
    store.select(state => state.pages).subscribe(
      (res) => this.pages = res
    );
  }

  ngOnInit() {
    if (this.pages.facebookGames == 1) {
      // Only if we're on the first page.
      this.store.dispatch(this.facebookGamesActions.loadPosts(this.pages.facebookGames));
    }

    if (this.pages.trends == 1) {
      // Only if we're on the first page.
      this.store.dispatch(this.trendsActions.loadPosts(this.pages.trends));
    }
  }
}
