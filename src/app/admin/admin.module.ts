import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule, Routes } from '@angular/router';
import { FounderComponent } from './founder/founder.component';
import { FormComponent } from '../content/form/form.component';
import { EngineeringComponent } from './engineering/engineering.component';
import { PlanningComponent } from './planning/planning.component';
import { ContentsComponent } from './contents/contents.component';
import { FinanceComponent } from './finance/finance.component';
import { CommunicationsComponent } from './communications/communications.component';
import { JudicialComponent } from './judicial/judicial.component';
import { RrhhComponent } from './rrhh/rrhh.component';
import { MarketingComponent } from './marketing/marketing.component';
import { FormsModule } from '@angular/forms';

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
      },
      {
        path: 'finance',
        component: FinanceComponent
      },
      {
        path: 'communications',
        component: CommunicationsComponent
      },
      {
        path: 'judicial',
        component: JudicialComponent
      },
      {
        path: 'rrhh',
        component: RrhhComponent
      },
      {
        path: 'marketing',
        component: MarketingComponent
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
    FormsModule,
    RouterModule.forChild(adminRoutes),
  ],
  declarations: [
    AdminComponent,
    FounderComponent,
    FormComponent,
    EngineeringComponent,
    PlanningComponent,
    ContentsComponent,
    FinanceComponent,
    CommunicationsComponent,
    JudicialComponent,
    RrhhComponent,
    MarketingComponent
  ]
})
export class AdminModule { }
