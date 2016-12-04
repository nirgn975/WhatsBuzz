import { Component } from '@angular/core';

import {FacebookService, FacebookInitParams} from 'ng2-facebook-sdk/dist';

@Component({
  selector: 'wb-root',
  template: `
    <wb-header></wb-header>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
    <wb-footer></wb-footer>
  `
})
export class WbComponent {
  constructor(
    private fb: FacebookService,
  ) { }
}
