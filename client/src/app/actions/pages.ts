import { Action } from '@ngrx/store';
import { type } from '../util';


export const ActionTypes = {
  NEXT_FACEBOOKGAMES_PAGE: type('[Page] Next Facebook Games Page'),
  NEXT_TRENDS_PAGE:        type('[Page] Next Trends Page'),
};

export class NextFacebookGamesPageAction implements Action {
  type = ActionTypes.NEXT_FACEBOOKGAMES_PAGE;

  constructor() { }
}

export class NextTrendsPageAction implements Action {
  type = ActionTypes.NEXT_TRENDS_PAGE;

  constructor() { }
}

export type Actions
  = NextFacebookGamesPageAction
  | NextTrendsPageAction;
