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
        path: 'JonesRealty',
        component: HomeComponent,
        title: 'Jones Realty Inc. - Home'
    },
    {
        path: 'JonesRealty/properties',
        component: PropertiesComponent,
        title: 'Jones Realty Inc. - Properties'
    },
    {
        path: 'JonesRealty/projects',
        component: ProjectsComponent,
        title: 'Jones Realty Inc. - Projects'
    },
    {
        path: 'JonesRealty/media',
        component: MediaComponent,
        title: 'Jones Realty Inc. - Media'
    },
    {
        path: 'JonesRealty/company',
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
        scrollOffset: [0, 0],
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'top'
    })],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
