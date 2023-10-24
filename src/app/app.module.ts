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
import { OutlineIconsModule } from "@dimaslz/ng-heroicons";
import { PropertyCardComponent } from './components/helpers/property-card/property-card.component';
import { ProjectCardComponent } from './components/helpers/project-card/project-card.component';
import { FeaturedComponent } from './components/helpers/featured/featured.component';
import { NgOptimizedImage } from "@angular/common";
import { MobileCollapseDirective } from './directives/mobile-collapse.directive';
import { AddTargetDirective } from './directives/add-target.directive';
import { ContactComponent } from './components/contact/contact.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RECAPTCHA_SETTINGS, RecaptchaFormsModule, RecaptchaModule, RecaptchaSettings } from "ng-recaptcha";
import { RouterModule } from "@angular/router";
import { LoadingScreenComponent } from './components/loading-screen/loading-screen.component';
import { FooterComponent } from './components/footer/footer.component';


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
    AddTargetDirective,
    ContactComponent,
    LoadingScreenComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    OutlineIconsModule,
    NgOptimizedImage,
    ReactiveFormsModule,
    FormsModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    RouterModule,
  ],
  providers: [{
    provide: RECAPTCHA_SETTINGS,
    useValue: {
      siteKey: "6Lc7w7goAAAAAJ1o4EfcPOYPvF7U89eYpX0G8wDw",
    } as RecaptchaSettings,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
