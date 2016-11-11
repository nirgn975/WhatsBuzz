import { Component } from '@angular/core';

import { TranslateService } from 'ng2-translate/ng2-translate';
import {FacebookService, FacebookInitParams} from 'ng2-facebook-sdk/dist';

@Component({
  selector: 'wb-root',
  template: `
    <wb-header></wb-header>
    <div class="container">
      <div class="col-sm-8">
        <router-outlet></router-outlet>
      </div>
      <wb-buzz class="col-sm-4"></wb-buzz>
    </div>
    <wb-footer></wb-footer>
  `,
  styles: [`
    .col-sm-8,
    .col-sm-4 {
      padding: 0;
    }
  `]
})
export class WbComponent {
  constructor(
    private translate: TranslateService,
    private fb: FacebookService,
  ) {
    // this language will be used as a fallback when a translation isn't
    // found in the current language.
    translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the
    // current loader to get them.
    translate.use('he');

    // Login to WhatsBuzz facebook app.
    let fbParams: FacebookInitParams = {
      appId   : '1063610257017045',
      cookie  : true,  // enable cookies to allow the server to access the session
      xfbml   : true,  // parse social plugins on this page
      version : 'v2.7' // use graph api version 2.7
    };
    this.fb.init(fbParams);
  }
}
