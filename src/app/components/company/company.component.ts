import { Component } from '@angular/core';
import {routerTransition} from "../../router.animations";

@Component({
  selector: 'app-company',
  animations: [routerTransition],
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss'],
})
export class CompanyComponent {

}
