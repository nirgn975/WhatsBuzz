import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../reducers';
import * as facebookGamesAction from '../../actions/facebookGames';
import { Post } from '../../models/post';

@Component({
  selector: 'wb-facebook-games',
  templateUrl: './facebook-games.component.html',
  styleUrls: ['./facebook-games.component.scss']
})
export class FacebookGamesComponent implements OnInit {
  public facebookGames$: Observable<Post[]>;

  constructor(
    private store: Store<fromRoot.State>,
  ) {
    this.facebookGames$ = this.store.select(fromRoot.getFacebookGamesEntities);
  }

  ngOnInit () {
    this.store.dispatch(new facebookGamesAction.LoadFacebookGamesPostsAction());
  }

  loadMore() {
    this.store.select(fromRoot.getFacebookGamesNextPage).subscribe(
      res => this.store.dispatch(new facebookGamesAction.LoadFacebookGamesNextPostsAction(res))
    );
  }

}
