import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserCardComponent } from './components/user-card/user-card.component';

const routes: Routes = [
  {
    path: '', component:  UserCardComponent,
  },
  // {
  //   path: '', redirectTo: '', pathMatch: 'full'
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserDetailsRoutingModule { }
