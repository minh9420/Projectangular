import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @ViewChild('sidenav') sidenav: MatSidenav;
  public isOpened = false;  

  public openLeftSide(){
    this.isOpened = !this.isOpened;
    // this.sidenav?.toggle();
    console.log(this.sidenav?.toggle())
  }
 
  
  reason = '';

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }

  shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);
}
