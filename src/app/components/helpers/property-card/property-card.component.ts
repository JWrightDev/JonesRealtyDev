import {Component, Input, OnInit} from '@angular/core';
import {Property} from "../../../helperFiles/Property";
import {initTE, Ripple} from "tw-elements";

@Component({
    selector: 'app-property-card',
    templateUrl: './property-card.component.html',
    styleUrls: ['./property-card.component.scss']
})
export class PropertyCardComponent implements OnInit {
    @Input() propertyItem: Property;

    constructor() {
        this.propertyItem = {
            id: 0,
            address: "",
            description: "",
            contactLink: "",
            thumbnailLink: "",
            altText: ""
        }
    }

    ngOnInit() {
        initTE({Ripple});
    }
}
