import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../reducers';
import * as facebookGamesActions from '../../actions/facebookGames';
import * as pagesActions from '../../actions/pages';
import { PrePost } from '../../models/pre-post';
import { Pages } from '../../models/pages';

@Component({
  selector: 'wb-facebook-games',
  templateUrl: './facebook-games.component.html',
  styleUrls: ['./facebook-games.component.scss']
})
export class FacebookGamesComponent implements OnInit {
  private posts$: Observable<PrePost[]>;
  private pages$: Pages;

  constructor(
    private store: Store<fromRoot.State>,
  ) {
    this.posts$ = store.select(fromRoot.getFacebookGamesState);
    this.store.select(fromRoot.getPagesState).subscribe(
      (res) => this.pages$ = res
    );
  }

  ngOnInit() {
    if (this.pages$.facebookGames === 1) {
      // Only if we're on the first page.
      this.store.dispatch(new facebookGamesActions.LoadPostsAction(this.pages$.facebookGames));

      // Move to next page.
      this.store.dispatch(new pagesActions.NextFacebookGamesPageAction());
    }
  }

  loadMore() {
    // Get the posts of the next page.
    this.store.dispatch(new facebookGamesActions.LoadPostsAction(this.pages$.facebookGames));

    // Move to next page.
    this.store.dispatch(new pagesActions.NextFacebookGamesPageAction());
  }
}
