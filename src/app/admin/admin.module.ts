import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule, Routes } from '@angular/router';
import { FounderComponent } from './founder/founder.component';

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
  declarations: [AdminComponent, FounderComponent]
})
export class AdminModule { }
