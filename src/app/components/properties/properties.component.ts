import {Component, OnInit} from '@angular/core';
import {Property} from "../../helperFiles/Property";
import {InfoService} from "../../services/info.service";

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss']
})
export class PropertiesComponent implements OnInit{
  propertyList: Property[];

  constructor(private propertyService: InfoService) {
    this.propertyList = [];
  }

  ngOnInit() {
    this.propertyService.getPropertiesObs().subscribe(propertyArray => this.propertyList = propertyArray);
  }
}
