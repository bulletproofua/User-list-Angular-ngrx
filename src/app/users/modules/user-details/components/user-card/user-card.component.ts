import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
// rxjs
import { Observable } from 'rxjs';
// ngrx
import { Store, select } from '@ngrx/store';
import { GetUserIdAction } from '../../ngrx/actions/user.actions';
import * as fromUser from '../../ngrx/reducers/index';
// interfaces
import { User } from 'src/app/users/ngrx/Models/user.interface';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserCardComponent implements OnInit {

  user$: Observable<User> = this.store.pipe(select(fromUser.getUser));
  loading$: Observable<boolean> = this.store.pipe(select(fromUser.getUserLoading));

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.store.dispatch(new GetUserIdAction());
  }

}
