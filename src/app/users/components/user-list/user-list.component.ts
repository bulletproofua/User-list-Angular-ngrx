import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
// rxjs
import { Observable } from 'rxjs';
// ngrx
import * as fromUserCollection from '../../ngrx/reducers/index';
import { SelectUserAction, LoadUsersAction } from '../../ngrx/actions/users-collection.actions';
// interfaces
import { User } from '../../ngrx/Models/user.interface';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent implements OnInit {

  users$: Observable<User[]> = this.store.pipe(select(fromUserCollection.getUserCollection));
  loading$: Observable<boolean> = this.store.pipe(select(fromUserCollection.getUserCollectionLoading));
  displayedColumns$: Observable<string[]> = this.store.pipe(select(fromUserCollection.getUserCollectionDisplayedColumns));

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.store.dispatch(new LoadUsersAction());
  }

  selectUser(user: User) {
    this.store.dispatch(new SelectUserAction(user.id));
  }

}
