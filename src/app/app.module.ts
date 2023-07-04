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
import { PropertyCardComponent } from './components/helpers/property-card/property-card.component';
import { ProjectCardComponent } from './components/helpers/project-card/project-card.component';
import { FeaturedComponent } from './components/helpers/featured/featured.component';
import {NgOptimizedImage} from "@angular/common";
import { MobileCollapseDirective } from './mobile-collapse.directive';
import { AddTargetDirective } from './add-target.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PropertiesComponent,
    ProjectsComponent,
    MediaComponent,
    CompanyComponent,
    NotFoundComponent,
    PropertyCardComponent,
    ProjectCardComponent,
    FeaturedComponent,
    MobileCollapseDirective,
    AddTargetDirective
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        OutlineIconsModule,
        NgOptimizedImage
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
