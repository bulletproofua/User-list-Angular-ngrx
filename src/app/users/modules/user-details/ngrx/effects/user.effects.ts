import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action, select, Store } from "@ngrx/store";
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from "@angular/router";

// rxjs
import { of, Observable, defer } from "rxjs";
import { map, switchMap, catchError, withLatestFrom } from 'rxjs/operators';

import { UserActionTypes, SetUserIdAction, LoadUserFailAction, GetUserIdAction, LoadUserSuccessAction } from '../actions/user.actions';
import * as fromUser from '../reducers/index';
import * as fromRoot from "../../../../../ngrx/reducers/index";

// interfaces
import { User } from 'src/app/users/ngrx/Models/user.interface';


@Injectable()
export class UserEffects {
  constructor(
    private store: Store<any>,
    private actions$: Actions,
    private http: HttpClient
  ) { }

  @Effect()
  LoadUser$: Observable<Action> = this.actions$.pipe(
    ofType(
      UserActionTypes.LoadUser,
      UserActionTypes.SetUserId
    ),
    withLatestFrom(
      this.store.select(fromUser.getUserId),
    ),
    switchMap(([action, userId]: any) => {
      const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
      return this.http.get(url).pipe(
        map((res: User) => {
          return new LoadUserSuccessAction(res);
        }),
        catchError((error: any) => {
          return of(new LoadUserFailAction(error));
        })
      );
    })
  );

  @Effect({})
  GetUserId$: Observable<Action> = this.actions$.pipe(
    ofType(UserActionTypes.GetUserId),
    withLatestFrom(
      this.store.select(fromRoot.getRouter),
    ),
    map(([actions, router]: any) => {
      const selectedUserId = router.state.params.id;
      return new SetUserIdAction(selectedUserId);
    })
  );

}
