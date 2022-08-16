import { Component, OnInit } from '@angular/core';
import { windowWhen } from 'rxjs';

@Component({
  selector: 'desktop',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  windows:any[] =[]
  constructor() { }

  ngOnInit(): void {
  }
  addwindow(type:string)
  {
    this.windows.push({id:this.windows.length,type:type,w:300
    ,h:400,x:90,y:69})
    console.log(this.windows)
  }
}
