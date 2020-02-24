import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less'],
  host: {
    style: 'background: #564E58;position:relative',
    class: 'app-navbar'
  }
})
export class NavbarComponent implements OnInit {

  public displayDebug = false;

    constructor() { }

  ngOnInit(): void {
  }

  toggleDebug() {
    this.displayDebug = !this.displayDebug;
  }
}
