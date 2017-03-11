import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { FacebookService, FacebookInitParams } from 'ng2-facebook-sdk/dist';
declare var ga: any;

@Component({
  selector: 'app-root',
  template: `
    <wb-header></wb-header>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
    <wb-footer></wb-footer>
  `,
  styles: [`
    // Medium devices (tablets, 768px and down)
    @media (max-width: 768px) {
      div.container {
        padding: 0 !important;
      }
    }
  `]
})
export class AppComponent {
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
    }).subscribe((x: any) => ga('send', 'pageview', x.url));
  }
}
