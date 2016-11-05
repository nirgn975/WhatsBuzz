import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { AppState } from '../../reducers';
import { TrendsActions } from '../../actions';

@Component({
  selector: 'wb-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.scss']
})
export class TrendsComponent implements OnInit {
  private posts: Observable<any>;

  constructor(
    private store: Store<AppState>,
    private trendsActions: TrendsActions,
  ) {
    this.posts = store.select('trends');
  }

  ngOnInit() {
    this.store.dispatch(this.trendsActions.loadPosts());
  }

  loadMore() {
    console.log('load more posts');
  }
}
