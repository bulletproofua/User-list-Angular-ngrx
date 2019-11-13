import { Action } from "@ngrx/store";
import { User } from '../Models/user.interface';

export enum UsersCollectionActionTypes {
  LoadUsers        = "[Users Collection] Load Users",
  LoadUsersSuccess = "[Users Collection] Load Users Success",
  LoadUsersFail    = "[Users Collection] Load Users Fail",

  SelectUser       = "[Users Collection] Select User",
}

export class LoadUsersAction implements Action {
  readonly type = UsersCollectionActionTypes.LoadUsers;
}

export class LoadUsersSuccessAction implements Action {
  readonly type = UsersCollectionActionTypes.LoadUsersSuccess;

  constructor(public payload: User[]) {}
}

export class LoadUsersFailAction implements Action {
  readonly type = UsersCollectionActionTypes.LoadUsersFail;

  constructor(public payload: any) {}
}

export class SelectUserAction implements Action {
  readonly type = UsersCollectionActionTypes.SelectUser;

  constructor(public userId: string | number) {}
}


export type UsersCollectionActionsUnion =
  | LoadUsersAction
  | LoadUsersSuccessAction
  | LoadUsersFailAction
  | SelectUserAction;
