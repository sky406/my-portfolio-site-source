import { Component, OnInit } from '@angular/core';

import { MeservService } from '../services/meserv.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  // remember to track the size of the window later
  about:any = {}
  mdata:any = {}
  links:any = {}
  proff:any = {}
  edu:any = {}
  ww:any = {}
  imageurl:string = ""
  // run:any = ""
  constructor(private me:MeservService) { }

  ngOnInit(): void {
    this.me.get().subscribe(me =>{
      this.mdata = me;
      this.about = this.mdata.data.attributes
      console.log(this.about)
    })
    this.imageurl = this.me.imurl
    let temp:any = {}

    this.me.get_links().subscribe(link =>{
      temp = link
      // console.log (temp)
      this.links = temp.data
      console.log("links")
      console.log(this.links)
      // remember this is an array
    })

    this.me.get_prof().subscribe(prof =>{
      temp = prof
      // console.log(temp)
      this.proff = temp.data
      console.log("prof")
      console.log(this.proff)
    })

    this.me.get_school().subscribe(dat =>{
      temp = dat
      this.edu = temp.data
      console.log("school")
      console.log(this.edu)
    })

    this.me.get_worked().subscribe(work =>{
      temp = work
      this.ww = temp.data
      console.log("work")
      console.log(this.ww)
    })
  }

}
