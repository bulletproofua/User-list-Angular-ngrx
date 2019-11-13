import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { RouterReducerState, routerReducer } from '@ngrx/router-store';

export interface State {
  router: RouterReducerState;
}

export const reducers: ActionReducerMap<State> = {
  router: routerReducer
};

export const getRouterState = createFeatureSelector<State>('router');

export const getRouter = createSelector(
  getRouterState,
  (state: any) => state
);

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return function(state: State, action: any): State {
    if (!environment.production) {
      console.log('%c state', 'color: blue', state);
      console.log('%c action', 'color: green', action);
    }
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<State>[] = !environment.production ? [logger] : [];
