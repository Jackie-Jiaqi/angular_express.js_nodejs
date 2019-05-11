import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from './auth/auth.guard';
import { RegisterComponent } from './register/register.component';
import{LoginComponent} from './login/login.component';
const routes: Routes = [
 
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {
    path:"admin",
    loadChildren:"./admin/admin.module#AdminModule",
    canActivate:[AuthGuard],
  },
  {path:"",redirectTo:"login",pathMatch:"full"},
  {path:"**",component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
