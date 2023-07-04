import {Component, OnInit} from '@angular/core';
// Initialization for ES Users
import {Carousel, Modal, Ripple, initTE,} from "tw-elements";
import {Featured} from "../../helperFiles/Featured";
import {InfoService} from "../../services/info.service";



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  featuredList: Featured[];

  constructor(private infoService: InfoService) {
    this.featuredList = [];
  }

  ngOnInit(){
    initTE({ Carousel, Modal, Ripple });
    this.infoService.getFeaturedObs().subscribe(featuredArray => this.featuredList = featuredArray);
  }
}