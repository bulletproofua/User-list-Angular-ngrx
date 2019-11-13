import {
  UserActionTypes,
  UserActionsUnion,
} from '../actions/user.actions';
import { User } from 'src/app/users/ngrx/Models/user.interface';

export interface State {
  loading: boolean;
  userId: string | number;
  user: User;
}

const initialState: State = {
  loading: false,
  userId: undefined,
  user: undefined
};

export function reducer(
  state = initialState,
  action: UserActionsUnion
): State {
  switch (action.type) {
    case UserActionTypes.GetUserId: {
      return {
        ...state,
        loading: true,
        userId: undefined,
        user: undefined,
      };
    }

    case UserActionTypes.SetUserId: {
      return {
        ...state,
        userId: action.id
      };
    }

    case UserActionTypes.LoadUser: {
      return {
        ...state,
        loading: true,
        user: undefined,
      };
    }

    case UserActionTypes.LoadUserSuccess: {
      return {
        ...state,
        loading: false,
        user: action.payload
      };
    }

    case UserActionTypes.LoadUserFail: {
      return {
        ...state,
        loading: false,
        user: undefined
      };
    }

    default: {
      return state;
    }
  }
}

export const getLoading = (state: State) => state.loading;
export const getUserId = (state: State) => state.userId;
export const getUser = (state: State) => state.user;

