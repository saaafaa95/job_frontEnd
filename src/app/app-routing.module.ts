import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUsersComponent } from './users/list-users/list-users.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { GetOneUserComponent } from './users/get-one-user/get-one-user.component';
import { UpdateUserComponent } from './users/update-user/update-user.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', loadChildren:()=>import('./home/home.module').then(m=>m.HomeModule) }, //lazy routing
  //authgard houwa kima gardgod mta3 boita itha enti maandkech acce matod5oulouch routing 
  //ken enti deja d5alt login rahou bech yhezin lel route 
  {path:'login',component:LoginComponent , canActivate :[authGuard]},
  {path:'register',component:RegisterComponent , canActivate:[authGuard]},
 
 // {path:'**',component:NotfoundComponent},
 // { path: 'addUser', component: AddUserComponent },
  /* { path: 'users', component: ListUsersComponent },
  /* { path: 'users', component: ListUsersComponent },

  { path: 'show_user/:id', component: GetOneUserComponent },
  { path: 'update_user/:id', //y23ayet lel update user compoenet // component: UpdateUserComponent } */

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
