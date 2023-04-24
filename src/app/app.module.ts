import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

//Components
import { HomeComponent } from './shared/home/home.component';
import { InformationComponent } from './entity/information/information.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderNavComponent } from './shared/header-nav/header-nav.component';
import { LoginComponent } from './auth/login/login.component';
import { FormComponent } from './content/form/form.component';

const bootstrapImports = [
  NgbModule,
  NgbDropdownModule
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LayoutComponent,
    HeaderNavComponent,
    InformationComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ...bootstrapImports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
