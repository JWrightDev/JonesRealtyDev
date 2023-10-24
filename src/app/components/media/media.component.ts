import {Component, OnInit} from '@angular/core';
import { initTE, Tab, Ripple, Lightbox} from "tw-elements";
import {routerTransition} from "../../router.animations";

@Component({
  selector: 'app-media',
  animations: [routerTransition],
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit{

  ngOnInit() {
    initTE({ Tab, Ripple, Lightbox });
  }



}
