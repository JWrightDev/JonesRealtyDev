import {Component, OnInit} from '@angular/core';
// Initialization for ES Users
import {Carousel, Modal, Ripple, initTE,} from "tw-elements";



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  ngOnInit(){
    initTE({ Carousel, Modal, Ripple });
  }
}
