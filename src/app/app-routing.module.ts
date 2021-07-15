import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserListComponent } from './user/user-list/user-list.component'; // user/user-list/user-list.component
import { UserComponent } from './user/user/user.component';


const routes: Routes = [
  
  {
    path: '',
    component: UserListComponent
  },
  {
    path: 'add-new-user',
    component: UserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
