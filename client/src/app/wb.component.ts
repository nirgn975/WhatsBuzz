import { Component } from '@angular/core';

@Component({
  selector: 'wb-root',
  template: `
    <wb-header></wb-header>
    <div class="container">
      <h1 class="col-sm-8">content here</h1>
      <wb-buzz class="col-sm-4"></wb-buzz>
    </div>
    <wb-footer></wb-footer>
  `
})
export class WhatsBuzzComponent {
}
