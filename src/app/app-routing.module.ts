import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {
  PropertiesComponent
} from "./components/properties/properties.component";
import {ProjectsComponent} from "./components/projects/projects.component";
import {MediaComponent} from "./components/media/media.component";
import {CompanyComponent} from "./components/company/company.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'properties',
    component: PropertiesComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'media',
    component: MediaComponent
  },
  {
    path: 'company',
    component: CompanyComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
