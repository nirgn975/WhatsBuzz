import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

@Injectable()
export class PagesActions {
  static NEXT_FACEBOOKGAMES_PAGE = '[Page] Next Facebook Games Page';
  nextFacebookGamesPage(): Action {
    return {
      type: PagesActions.NEXT_FACEBOOKGAMES_PAGE,
    };
  }

  static NEXT_TRENDS_PAGE = '[Page] Next Trends Page';
  nextTrendsPage(): Action {
    return {
      type: PagesActions.NEXT_TRENDS_PAGE,
    };
  }
}
