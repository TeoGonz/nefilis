import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

//Components
import { HomeComponent } from './shared/home/home.component';
import { InformationComponent } from './entity/information/information.component';

const bootstrapImports = [
  NgbModule,
  NgbDropdownModule
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InformationComponent
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
