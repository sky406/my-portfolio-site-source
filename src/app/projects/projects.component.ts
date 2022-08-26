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
  projectkeys:any = 0
  constructor(private proj:ProjectservService, private route:ActivatedRoute) { }
  serverurl:string = ''
  ngOnInit(): void {
    let temp:any = {}
    this.proj.getprojects().subscribe(p =>{
      temp = p
      this.projects = temp.data
      // console.log(typeof(this.projects))
      // console.log(this.projects)
      this.projectkeys = Object.keys(this.projects)
      this.serverurl = this.proj.imgurl
      // console.log(this.serverurl+this.projects[0].attributes.icon_img.data.attributes.url)
    })


  }

}
