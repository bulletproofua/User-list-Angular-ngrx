import * as fromUser from './user.reducer';

import * as fromRoot from '../../ngrx/reducers/index';

import {ActionReducerMap, createFeatureSelector, createSelector} from "@ngrx/store";


export interface UsersState {
  user: fromUser.State;
}

export interface State {
  user: UsersState;
}

export const reducers: ActionReducerMap<UsersState> = {
  user: fromUser.reducer,
};

export const UsersState = createFeatureSelector('user');

export const getUserState = createSelector(
  UsersState,
  (state: UsersState) => {
   return state.user;
  }
);

export const getUserLoading = createSelector(
  getUserState,
  fromUser.getLoading
);

export const getUserId = createSelector(
  getUserState,
  fromUser.getUserId
);

export const getUser = createSelector(
  getUserState,
  fromUser.getUser
);


