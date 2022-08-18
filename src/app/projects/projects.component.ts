import { Component, OnInit } from '@angular/core';
import { ProjectservService } from '../services/projectserv.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects:object = {}
  constructor(private proj:ProjectservService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.proj.getprojects().subscribe(p =>{
      this.projects = p;
      console.log(this.projects)
    })
  }

}
