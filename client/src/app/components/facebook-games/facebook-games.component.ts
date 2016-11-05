import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { AppState } from '../../reducers';
import { FacebookGamesActions, PagesActions } from '../../actions';
import { FacebookGame, Pages } from '../../models';

@Component({
  selector: 'wb-facebook-games',
  templateUrl: './facebook-games.component.html',
  styleUrls: ['./facebook-games.component.scss']
})
export class FacebookGamesComponent implements OnInit {
  private posts: Observable<FacebookGame[]>;
  private pages: Pages;

  constructor(
    private store: Store<AppState>,
    private facebookGamesActions: FacebookGamesActions,
    private pagesActions: PagesActions,
  ) {
    this.posts = store.select(state => state.facebookGames);
    store.select(state => state.pages).subscribe(
      (res) => this.pages = res
    );
  }

  ngOnInit() {
    if (this.pages.facebookGames == 1) {
      // Only if we're on the first page.
      this.store.dispatch(this.facebookGamesActions.loadPosts(this.pages.facebookGames));

      // Move to next page.
      this.store.dispatch(this.pagesActions.nextFacebookGamesPage());
    }
  }

  loadMore() {
    // Get the posts of the next page.
    this.store.dispatch(this.facebookGamesActions.loadMorePosts(this.pages.facebookGames));

    // Move to next page.
    this.store.dispatch(this.pagesActions.nextFacebookGamesPage());
  }
}
