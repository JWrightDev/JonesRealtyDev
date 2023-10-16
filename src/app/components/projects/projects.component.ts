import {Component, OnInit} from '@angular/core';
import {InfoService} from "../../services/info.service";
import {Project} from "../../helperFiles/Project";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit{
  projectList: Project[];

  constructor(private propertyService: InfoService) {
    this.projectList= [];
  }

  ngOnInit() {
    this.propertyService.getProjectsObs().subscribe(projectArray => this.projectList = projectArray);
  }
}
