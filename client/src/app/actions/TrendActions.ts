import { Action, ActionCreator } from 'redux';
import { Trend } from '../models';

export const SELECT_TREND = '[Trend] Select';
export interface SelectTrendAction extends Action {
  trend: Trend;
}
export const selectTrend: ActionCreator<SelectTrendAction> =
  (trend) => ({
    type: SELECT_TREND,
    trend: trend
  });
