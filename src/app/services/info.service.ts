import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Property } from '../helperFiles/Property';
import { PROPERTYLIST } from '../helperFiles/PropertyDB';
import { Project } from '../helperFiles/Project';
import { PROJECTLIST } from '../helperFiles/ProjectDb';
import { Featured } from '../helperFiles/Featured';
import { FEATUREDLIST } from '../helperFiles/FeaturedDb';

@Injectable({
	providedIn: 'root',
})
export class InfoService {
	constructor() {}

	getPropertiesObs(): Observable<Property[]> {
		return of(PROPERTYLIST);
	}

	getProjectsObs(): Observable<Project[]> {
		return of(PROJECTLIST);
	}

	getFeaturedObs(): Observable<Featured[]> {
		return of(FEATUREDLIST);
	}

	getProperty(id: number): Observable<Property | undefined> {
		return of(PROPERTYLIST.at(id));
	}
}
