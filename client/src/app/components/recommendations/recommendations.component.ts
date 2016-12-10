import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../reducers';
import * as recommendationsActions from '../../actions/recommendations';
import { PrePost } from '../../models/pre-post';
import { DetailPost } from '../../models/detail-post';

@Component({
  selector: 'wb-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.scss']
})
export class RecommendationsComponent {
  private recommendations$: Observable<PrePost[]>;
  private detailPost$: DetailPost;

  constructor(
    private store: Store<fromRoot.State>,
  ) {
    this.recommendations$ = store.select(fromRoot.getRecommandationState);
    this.store.select(fromRoot.getDetailPostState).subscribe(
      (res) => this.detailPost$ = res
    );
  }
}
