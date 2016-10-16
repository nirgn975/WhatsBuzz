import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AppService } from './shared/app.service';

@Component({
  selector: 'wb-root',
  template: `
    <wb-header></wb-header>
    <div class="container">
      <h1>content here</h1>
    </div>
    <wb-footer></wb-footer>
  `
})
export class WhatsBuzzComponent implements OnInit {

  constructor(
    private appService: AppService
  ) { }

  ngOnInit() {
    // this.appService.getDummyData().subscribe(
    //   (res) => this.title = res
    // );
  }
}
