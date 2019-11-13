import * as fromUsersCollection from './users-collection.reducer';

import * as fromRoot from '../../ngrx/reducers/index';

import {ActionReducerMap, createFeatureSelector, createSelector} from "@ngrx/store";


export interface UsersState {
  usersCollection: fromUsersCollection.State;
}

export interface State  { // extends fromRoot.State
  users: UsersState;
}

export const reducers: ActionReducerMap<UsersState> = {
  usersCollection: fromUsersCollection.reducer,
};

export const UsersState = createFeatureSelector('users');

export const getUserState = createSelector(
  UsersState,
  (state: UsersState) => {
   return state.usersCollection;
  }
);

export const getUserCollectionLoading = createSelector(
  getUserState,
  fromUsersCollection.getLoading
);

export const getUserCollectionDisplayedColumns = createSelector(
  getUserState,
  fromUsersCollection.getDisplayedColumns
);

export const getUserCollection = createSelector(
  getUserState,
  fromUsersCollection.getCollection
);
