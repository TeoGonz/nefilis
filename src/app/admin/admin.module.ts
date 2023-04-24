import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule, Routes } from '@angular/router';
import { FounderComponent } from './founder/founder.component';
import { FormComponent } from '../content/form/form.component';
import { EngineeringComponent } from './engineering/engineering.component';
import { PlanningComponent } from './planning/planning.component';
import { ContentsComponent } from './contents/contents.component';

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
      },
      {
        path: 'engineering',
        component: EngineeringComponent
      },
      {
        path: 'planning',
        component: PlanningComponent
      },
      {
        path: 'contents',
        component: ContentsComponent
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
  declarations: [
    AdminComponent,
    FounderComponent,
    FormComponent,
    EngineeringComponent,
    PlanningComponent,
    ContentsComponent
  ]
})
export class AdminModule { }
