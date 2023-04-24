import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './shared/home/home.component';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';

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
    component: AppComponent,
    runGuardsAndResolvers: 'always',
    children: [
      {
        path: '',
        component: LayoutComponent,
        resolve: {},
        runGuardsAndResolvers: 'always',
        children: [
          {
            path: 'admin',
            loadChildren: () =>
              import(
                './admin/admin.module'
              ).then((m) => m.AdminModule),
            canLoad: [],
            runGuardsAndResolvers: 'always',
          }
        ]
      },
    ]
  },
  {
    path: 'home',
    component: HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(Approutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
