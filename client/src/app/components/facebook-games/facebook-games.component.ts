import { Component } from '@angular/core';
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
export class FacebookGamesComponent {
  public facebookGames$: Observable<Post[]>;

  constructor(
    private store: Store<fromRoot.State>,
  ) {
    this.facebookGames$ = this.store.select(fromRoot.getFacebookGamesEntities);
  }

}
