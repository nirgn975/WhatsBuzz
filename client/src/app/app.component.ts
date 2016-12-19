import { Component } from '@angular/core';

import { FacebookService, FacebookInitParams } from 'ng2-facebook-sdk/dist';

@Component({
  selector: 'wb-root',
  templateUrl: './wb.component.html',
  styleUrls: ['./wb.component.css']
})
export class WbComponent {
  constructor(
    private fb: FacebookService,
  ) { }
}
