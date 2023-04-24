import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule, Routes } from '@angular/router';
import { FounderComponent } from './founder/founder.component';
import { FormComponent } from '../content/form/form.component';

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [],
    runGuardsAndResolvers: 'always',
    children: [
      {
        path: 'founders',
        component: FounderComponent,
        runGuardsAndResolvers: 'always'
      },
      {
        path: 'add',
        component: FormComponent
      }
      /* {
        path: 'add',
        loadChildren: () =>
          import(
            './../content/form/form.component'
          ).then((m) => m.FormComponent),
      } */
      /* {
        path: 'conversations',
        loadChildren: './conversations/conversations.module#ConversationsModule'
      }, */
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes),
  ],
  declarations: [AdminComponent, FounderComponent, FormComponent]
})
export class AdminModule { }
