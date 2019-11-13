import {
  UsersCollectionActionTypes,
  UsersCollectionActionsUnion,
} from '../actions/users-collection.actions';
import { User } from '../Models/user.interface';

export interface State {
  loading: boolean;
  displayedColumns: string[];
  collection: Array<User>;
}

const initialState: State = {
  loading: false,
  displayedColumns: ['name', 'email'],
  collection: [],
};

export function reducer(
  state = initialState,
  action: UsersCollectionActionsUnion
): State {
  switch (action.type) {
    case UsersCollectionActionTypes.LoadUsers: {
      return {
        ...state,
        loading: true,
        collection: []
      };
    }

    case UsersCollectionActionTypes.LoadUsersSuccess: {
      return {
        ...state,
        loading: false,
        collection: action.payload
      };
    }

    case UsersCollectionActionTypes.LoadUsersFail: {
      return {
        ...state,
        loading: false,
        collection: []
      };
    }

    default: {
      return state;
    }
  }
}

export const getLoading = (state: State) => state.loading;
export const getCollection = (state: State) => state.collection;
export const getDisplayedColumns = (state: State) => state.displayedColumns;

