import {Component, OnInit} from '@angular/core';
import {initTE, Collapse} from "tw-elements";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Jones Realty';

  ngOnInit() {
    initTE({ Collapse });
  }

}
