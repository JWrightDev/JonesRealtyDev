import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../../helperFiles/Project';
import { initTE, Ripple } from 'tw-elements';

@Component({
	selector: 'app-project-card',
	templateUrl: './project-card.component.html',
	styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent implements OnInit {
	@Input() projectItem: Project;

	constructor() {
		this.projectItem = {
			id: 0,
			projectName: '',
			projectDescription: '',
			projectCategory: '',
			thumbnailLink: '',
			projectContactLink: '',
		};
	}

	ngOnInit() {
		initTE({ Ripple });
	}

	openWindow(url: string) {
		window.open(url, '_blank');
	}
}
