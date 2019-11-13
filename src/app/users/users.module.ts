import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { UsersRoutingModule } from './users-routing.module';
import { UserListComponent } from './components/user-list/user-list.component';
import { MaterialModule } from '../material.module';

// ngrx
import { StoreModule } from '@ngrx/store';
import { reducers } from './ngrx/reducers';
import { EffectsModule } from '@ngrx/effects';
import { UsersCollectionEffects } from './ngrx/effects/users-collection.effects';


@NgModule({
  declarations: [UserListComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    UsersRoutingModule,
    StoreModule.forFeature('users', reducers),
    EffectsModule.forFeature([
      UsersCollectionEffects
    ]),
  ]
})
export class UsersModule { }
