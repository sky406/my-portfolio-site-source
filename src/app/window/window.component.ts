import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.scss']
})
export class WindowComponent implements OnInit {

  constructor() { }
  @Input() type:string = "me"
  @Input() posx:number = 0
  @Input() posy:number = 0
  @Input() width:number = 300
  @Input() height:number= 400
  @Input() id:number = 1

  ngOnInit(): void {
  }

}
