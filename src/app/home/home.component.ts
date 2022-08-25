import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'desktop',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  windows:any[] =[]
  window:boolean = false
  constructor(private route:ActivatedRoute) { }
  url:string = "http://localhost:4200/"
  ngOnInit(): void {
    console.log(window.location.href)
    if (this.url!= window.location.href) this.window = true;
  }
  // addwindow(type:string)
  // {
  //   // this.windows.push({id:this.windows.length,type:type,w:300
  //   // ,h:400,x:90,y:40})
  //   // console.log(this.windows)

  // }
  openwindow()
  {
    this.window = true
  }
}
