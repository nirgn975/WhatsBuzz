import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../reducers';
import * as trendsActions from '../../actions/trends';
import * as pagesActions from '../../actions/pages';
import { PrePost } from '../../models/pre-post';
import { Pages } from '../../models/pages';

@Component({
  selector: 'wb-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.scss']
})
export class TrendsComponent implements OnInit {
  private posts$: Observable<PrePost[]>;
  private pages$: Pages;

  constructor(
    private store: Store<fromRoot.State>,
  ) {
    this.posts$ = store.select(fromRoot.getTrendsState);
    this.store.select(fromRoot.getPagesState).subscribe(
      (res) => this.pages$ = res
    );
  }

  ngOnInit() {
    if (this.pages$.trends == 1) {
      // Only if we're on the first page.
      this.store.dispatch(new trendsActions.LoadPostsAction(this.pages$.trends));

      // Move to next page.
      this.store.dispatch(new pagesActions.NextTrendsPageAction());
    }
  }

  loadMore() {
    // Get the posts of the next page.
    this.store.dispatch(new trendsActions.LoadMorePostsAction(this.pages$.trends));

    // Move to next page.
    this.store.dispatch(new pagesActions.NextTrendsPageAction());
  }
}
