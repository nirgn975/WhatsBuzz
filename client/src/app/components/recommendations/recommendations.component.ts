import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { AppState } from '../../reducers';
import { RecommendationsActions } from '../../actions';
import { Recommendation } from '../../models';

@Component({
  selector: 'wb-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.scss']
})
export class RecommendationsComponent implements OnInit {
  private recommendations: Observable<Recommendation[]>;

  constructor(
    private store: Store<AppState>,
    private recommendationsActions: RecommendationsActions,
  ) {
    this.recommendations = store.select(state => state.recommandations);
  }

  ngOnInit() {
    this.store.dispatch(this.recommendationsActions.loadRecommendations('children'));
  }
}
