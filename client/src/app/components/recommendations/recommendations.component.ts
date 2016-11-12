import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { AppState } from '../../reducers';
import { RecommendationsActions } from '../../actions';
import { PrePost, DetailPost } from '../../models';

@Component({
  selector: 'wb-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.scss']
})
export class RecommendationsComponent {
  private recommendations: Observable<PrePost[]>;
  private detailPost: DetailPost;

  constructor(
    private store: Store<AppState>,
    private recommendationsActions: RecommendationsActions,
  ) {
    this.recommendations = store.select(state => state.recommandations);
    store.select(state => state.detailPost).subscribe(
      (res) => this.detailPost = res
    );
  }
}
