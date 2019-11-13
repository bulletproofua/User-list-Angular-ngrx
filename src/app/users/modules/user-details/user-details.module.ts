import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDetailsRoutingModule } from './user-details-routing.module';
import { UserCardComponent } from './components/user-card/user-card.component';
import { MaterialModule } from 'src/app/material.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from './ngrx/reducers';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './ngrx/effects/user.effects';

const COMPONENTS = [
  UserCardComponent
];

@NgModule({
  declarations: COMPONENTS,
  exports: COMPONENTS,
  imports: [
    CommonModule,
    MaterialModule,
    UserDetailsRoutingModule,
    StoreModule.forFeature('user', reducers),
    EffectsModule.forFeature([
      UserEffects
    ]),
  ]
})
export class UserDetailsModule { }
