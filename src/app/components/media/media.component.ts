import {Component, OnInit} from '@angular/core';
import { initTE, Tab, Ripple, Lightbox} from "tw-elements";

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit{

  ngOnInit() {
    initTE({ Tab, Ripple, Lightbox });
  }



}
