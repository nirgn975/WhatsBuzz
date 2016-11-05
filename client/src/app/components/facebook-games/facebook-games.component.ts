import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { AppState } from '../../reducers';
import { FacebookGamesActions } from '../../actions';

@Component({
  selector: 'wb-facebook-games',
  templateUrl: './facebook-games.component.html',
  styleUrls: ['./facebook-games.component.scss']
})
export class FacebookGamesComponent implements OnInit {
  private posts: Observable<any>;

  constructor(
    private store: Store<AppState>,
    private facebookGamesActions: FacebookGamesActions,
  ) {
    this.posts = store.select('facebookGames');
  }

  ngOnInit() {
    this.store.dispatch(this.facebookGamesActions.loadPosts('1'));
  }

  loadMore() {
    console.log('in load more');
    this.store.dispatch(this.facebookGamesActions.loadMorePosts('2'));
  }
}
