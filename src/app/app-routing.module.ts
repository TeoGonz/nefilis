import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './shared/home/home.component';
import { FormComponent } from './content/form/form.component';

export const Approutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'login/:token',
    component: LoginComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'register-movies',
    component: FormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(Approutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
