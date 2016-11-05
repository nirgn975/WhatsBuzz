import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { AppState } from '../../reducers';
import { TrendsActions, PagesActions } from '../../actions';
import { Trend, Pages } from '../../models';

@Component({
  selector: 'wb-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.scss']
})
export class TrendsComponent implements OnInit {
  private posts: Observable<Trend[]>;
  private pages: Pages;

  constructor(
    private store: Store<AppState>,
    private trendsActions: TrendsActions,
    private pagesActions: PagesActions,
  ) {
    this.posts = store.select(state => state.trends);
    store.select(state => state.pages).subscribe(
      (res) => this.pages = res
    );
  }

  ngOnInit() {
    if (this.pages.trends == 1) {
      // Only if we're on the first page.
      this.store.dispatch(this.trendsActions.loadPosts(this.pages.trends));
    }
  }

  loadMore() {
    // Get the posts of the next page.
    this.store.dispatch(this.trendsActions.loadMorePosts(this.pages.trends));

    // Move to next page.
    this.store.dispatch(this.pagesActions.nextTrendsPage());
  }
}
