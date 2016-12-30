import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { FacebookService, FacebookInitParams } from 'ng2-facebook-sdk/dist';
declare var ga: any;

@Component({
  selector: 'wb-root',
  templateUrl: './wb.component.html',
  styleUrls: ['./wb.component.scss']
})
export class WbComponent {
  private currentRoute:string;

  constructor(
    private fb: FacebookService,
    private router: Router,
  ) {
    router.events.distinctUntilChanged((previous: any, current: any) => {
      if(current instanceof NavigationEnd) {
        return previous.url === current.url;
      }
      return true;
    }).subscribe((x: any) => {
      console.log('router.change', x);
      ga('send', 'pageview', x.url);
    });
  }
}
