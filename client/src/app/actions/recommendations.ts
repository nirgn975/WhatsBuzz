import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

@Injectable()
export class RecommendationsActions {
  static LOAD_RECOMMENDATIONS = '[Recommendations] Load Recommendations';
  loadRecommendations(category): Action {
    return {
      type: RecommendationsActions.LOAD_RECOMMENDATIONS,
      payload: category
    };
  }

  static LOAD_RECOMMENDATIONS_SUCCESS = '[Recommendations] Load Recommendations Success';
  loadRecommendationsSuccess(recommendations): Action {
    return {
      type: RecommendationsActions.LOAD_RECOMMENDATIONS_SUCCESS,
      payload: recommendations
    };
  }
}
