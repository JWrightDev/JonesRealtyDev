import {Component, OnInit} from '@angular/core';
// Initialization for ES Users
import {Carousel, Modal, Ripple, initTE, Alert} from "tw-elements";
import {Featured} from "../../helperFiles/Featured";
import {InfoService} from "../../services/info.service";
import {routerTransition} from "../../router.animations";



@Component({
  selector: 'app-home',
  animations: [routerTransition],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  featuredList: Featured[];

  constructor(private infoService: InfoService) {
    this.featuredList = [];
  }

  ngOnInit(){
    initTE({ Carousel, Modal, Ripple, Alert });
    this.infoService.getFeaturedObs().subscribe(featuredArray => this.featuredList = featuredArray);
  }
}
