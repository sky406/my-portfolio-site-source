import { Component, OnInit } from '@angular/core';
import { ProjectservService } from '../services/projectserv.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects:any = {}
  projectkeys:any = Object.keys(this.projects)
  constructor(private proj:ProjectservService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    let temp:any = {}
    this.proj.getprojects().subscribe(p =>{
      temp = p
      this.projects = temp.data
      console.log(typeof(this.projects))
      console.log(this.projects)
    })
  }

}
