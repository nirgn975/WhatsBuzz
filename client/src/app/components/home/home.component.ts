import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../reducers';
import * as facebookGamesAction from '../../actions/facebookGames';
import * as trendsAction from '../../actions/trends';
import { Post } from '../../models/post';

@Component({
  selector: 'wb-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public facebookGames$: Observable<Post[]>;
  public trends$: Observable<Post[]>;

  constructor(
    private store: Store<fromRoot.State>,
  ) {
    this.facebookGames$ = this.store.select(fromRoot.getFacebookGamesEntities);
    this.trends$ = this.store.select(fromRoot.getTrendsEntities);
  }

  ngOnInit() {
    this.store.dispatch(new facebookGamesAction.LoadFacebookGamesPostsAction());
    this.store.dispatch(new trendsAction.LoadTrendsPostsAction());
  }

}
