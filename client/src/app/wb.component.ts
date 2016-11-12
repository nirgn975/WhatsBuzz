import { Component } from '@angular/core';

import { TranslateService } from 'ng2-translate/ng2-translate';
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
    private translate: TranslateService,
    private fb: FacebookService,
  ) {
    // this language will be used as a fallback when a translation isn't
    // found in the current language.
    translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the
    // current loader to get them.
    translate.use('he');
  }
}
