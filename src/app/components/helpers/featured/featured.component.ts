import {Component, Input, OnInit} from '@angular/core';
import {Featured} from "../../../helperFiles/Featured";
import {initTE, Modal, Ripple} from "tw-elements";

@Component({
    selector: 'app-featured',
    templateUrl: './featured.component.html',
    styleUrls: ['./featured.component.scss']
})
export class FeaturedComponent implements OnInit {
    @Input() featuredItem: Featured;

    constructor() {
        this.featuredItem = {
            id: 0,
            address: "",
            thumbnails: [""],
            email: "",
            contactLink: "",
            description: ""
        }
    }

    ngOnInit() {
        initTE({Ripple, Modal});
    }
}
