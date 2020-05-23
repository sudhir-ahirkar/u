import { Component, OnInit } from '@angular/core';
import { Spinkit } from 'ng-http-loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'bw-workshop-mis-ui';
  public spinkit = Spinkit;
  constructor(){

  }
  ngOnInit() {
  }
}
