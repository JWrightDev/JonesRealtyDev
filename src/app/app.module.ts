import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PropertiesComponent } from './components/properties/properties.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { MediaComponent } from './components/media/media.component';
import { CompanyComponent } from './components/company/company.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {OutlineIconsModule} from "@dimaslz/ng-heroicons";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PropertiesComponent,
    ProjectsComponent,
    MediaComponent,
    CompanyComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    OutlineIconsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
