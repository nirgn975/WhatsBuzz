import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppService } from './shared/app.service';

@Component({
  selector: 'wb-root',
  template: `
    <h1>{{ title }}</h1>
  `
})
export class WhatsBuzzComponent implements OnInit {
  title = 'app works!';

  constructor(
    private appService: AppService
  ) { }

  ngOnInit() {
    // this.appService.getDummyData().subscribe(
    //   (res) => this.title = res
    // );
  }
}
