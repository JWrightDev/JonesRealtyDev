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

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Jones Realty Inc. - Home'
    },
    {
        path: 'properties',
        component: PropertiesComponent,
        title: 'Jones Realty Inc. - Properties'
    },
    {
        path: 'projects',
        component: ProjectsComponent,
        title: 'Jones Realty Inc. - Projects'
    },
    {
        path: 'media',
        component: MediaComponent,
        title: 'Jones Realty Inc. - Media'
    },
    {
        path: 'company',
        component: CompanyComponent,
        title: 'Jones Realty Inc. - Company / Contact'
    },
    {
        path: '**',
        component: NotFoundComponent,
        title: 'Jones Realty Inc. - Not Found'
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
