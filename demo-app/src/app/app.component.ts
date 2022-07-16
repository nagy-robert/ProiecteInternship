import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'demo-app';
  public dateNow = new Date();
  public unNumar = 3243.42342343;
  ngOnInit() {
  }

  ngOnDestroy() {

  }
}
