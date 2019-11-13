import { Action } from "@ngrx/store";
import { User } from 'src/app/users/ngrx/Models/user.interface';

export enum UserActionTypes {
  GetUserId       = "[User] Get User Id",
  SetUserId       = "[User] Set User Id",

  LoadUser        = "[User] Load User",
  LoadUserSuccess = "[User] Load User Success",
  LoadUserFail    = "[User] Load User Fail",
}

export class GetUserIdAction implements Action {
  readonly type = UserActionTypes.GetUserId;
}

export class SetUserIdAction implements Action {
  readonly type = UserActionTypes.SetUserId;
  constructor(public id: string | number) {}
}

export class LoadUserAction implements Action {
  readonly type = UserActionTypes.LoadUser;
}

export class LoadUserSuccessAction implements Action {
  readonly type = UserActionTypes.LoadUserSuccess;

  constructor(public payload: User) {}
}

export class LoadUserFailAction implements Action {
  readonly type = UserActionTypes.LoadUserFail;

  constructor(public payload: any) {}
}

export type UserActionsUnion =
  | GetUserIdAction
  | SetUserIdAction
  | LoadUserAction
  | LoadUserSuccessAction
  | LoadUserFailAction;
