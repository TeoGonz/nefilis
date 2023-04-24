import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

//Components
import { HomeComponent } from './shared/home/home.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderNavComponent } from './shared/header-nav/header-nav.component';
import { LoginComponent } from './auth/login/login.component';


const bootstrapImports = [
  NgbModule,
  NgbDropdownModule
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SidebarComponent,
    LayoutComponent,
    HeaderNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ...bootstrapImports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
