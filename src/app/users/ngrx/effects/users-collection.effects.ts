import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action, Store } from "@ngrx/store";
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";

// rxjs
import { of, Observable, defer } from "rxjs";
import { map, switchMap, catchError } from 'rxjs/operators';

import {
  UsersCollectionActionTypes,
  LoadUsersSuccessAction,
  LoadUsersFailAction,
  LoadUsersAction
} from '../actions/users-collection.actions';
// interfaces
import { User } from '../Models/user.interface';

@Injectable()
export class UsersCollectionEffects {
  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private Router: Router,
  ) { }

  @Effect()
  LoadUsers$: Observable<Action> = this.actions$.pipe(
    ofType(UsersCollectionActionTypes.LoadUsers),
    switchMap(([action]: any) => {
      return this.http.get('https://jsonplaceholder.typicode.com/users').pipe(
        map((res: User[]) => {
          return new LoadUsersSuccessAction(res);
        }),
        catchError((error: any) => {
          return of(new LoadUsersFailAction(error));
        })
      );
    })
  );

  @Effect({dispatch: false})
  SelectUserAction$: Observable<void> = this.actions$.pipe(
    ofType(UsersCollectionActionTypes.SelectUser),
    map((action: any) => {
      const userId = action.userId;
      this.Router.navigateByUrl(`users/${userId}`);
    })
  );

  @Effect()
  init$: Observable<Action> = defer(() => of(new LoadUsersAction()));

}
