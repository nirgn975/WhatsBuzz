import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../reducers';
import * as trendsAction from '../../actions/trends';
import { Post } from '../../models/post';

@Component({
  selector: 'wb-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.scss']
})
export class TrendsComponent {
  public trends$: Observable<Post[]>;

  constructor(
    private store: Store<fromRoot.State>,
  ) {
    this.trends$ = this.store.select(fromRoot.getTrendsEntities);
  }

}
