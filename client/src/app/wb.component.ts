import { Component } from '@angular/core';

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
export class WhatsBuzzComponent {
}
