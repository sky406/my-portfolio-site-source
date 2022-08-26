import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectservService } from '../services/projectserv.service';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  constructor(private proj:ProjectservService,private route:ActivatedRoute) { }
  project:any={}
  url:string =''
  displayedimg = ''
  prev:number = 0
  next:number = 0
  projects:any=[]
  ngOnInit(): void {
    let id = this.route.snapshot.params["id"]
    let temp = {}
    this.proj.getproject(parseInt(id)+1).subscribe(p=>{
      this.project = p
      console.log(this.project)
      console.log(typeof(this.project.data.attributes.other_imgs.data))

    })

    this.proj.getprojects().subscribe(pr=>{
      this.projects = pr
    })
    this.url = this.proj.imgurl

  }

  getkeys(obj:object)
  {
    return Object.keys(obj)
  }

  prevexists()
  {
    if(this.prev==0)return false;
    else return true;
  }

  nextexists()
  {
    if(this.next==0)return false;
    else return true;
  }

}
