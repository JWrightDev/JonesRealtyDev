import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {
    PropertiesComponent
} from "./components/properties/properties.component";
import {ProjectsComponent} from "./components/projects/projects.component";
import {MediaComponent} from "./components/media/media.component";
import {CompanyComponent} from "./components/company/company.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {LoadingScreenComponent} from "./components/loading-screen/loading-screen.component";

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Jones Realty Inc. - Home',
        data: {
          animation: 'home'
        }
    },
    {
        path: 'properties',
        component: PropertiesComponent,
        title: 'Jones Realty Inc. - Properties',
        data: {
          animation: 'properties'
        }
    },
    {
        path: 'projects',
        component: ProjectsComponent,
        title: 'Jones Realty Inc. - Projects',
        data: {
          animation: 'projects'
        }
    },
    {
        path: 'media',
        component: MediaComponent,
        title: 'Jones Realty Inc. - Media',
        data: {
          animation: 'media'
        }
    },
    {
        path: 'company',
        component: CompanyComponent,
        title: 'Jones Realty Inc. - Company / Contact',
        data: {
          animation: 'company'
        }
    },
    {
        path: '**',
        component: NotFoundComponent,
        title: 'Jones Realty Inc. - Not Found',
        data: {
          animation: 'notfound'
        }
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        anchorScrolling: 'enabled',
        scrollOffset: [0, 64],
        scrollPositionRestoration: 'top'
    })],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
