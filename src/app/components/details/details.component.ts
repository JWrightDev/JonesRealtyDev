import { Component, Input, OnInit } from '@angular/core';
import { Property } from '../../helperFiles/Property';
import { InfoService } from '../../services/info.service';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-details',
	templateUrl: './details.component.html',
	styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
	@Input() property: Property;
	private id: number;

	constructor(
		private infoService: InfoService,
		private route: ActivatedRoute,
	) {
		this.property = {
			id: 0,
			address: '',
			description: '',
			contactLink: '',
			thumbnailLink: '',
			altText: '',
			thumbnails: [],
			listingLink: '',
		};
		this.id = 0;
	}
	ngOnInit(): void {
		this.route.params.subscribe((params) => {
			this.id = params['id'];
		});
		this.infoService.getProperty(this.id).subscribe((property) => {
			if (property) {
				this.property = property;
			}
		});
	}
}
