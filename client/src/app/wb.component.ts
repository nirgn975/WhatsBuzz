import { Component } from '@angular/core';
import { TranslateService } from 'ng2-translate/ng2-translate';

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

  constructor(translate: TranslateService) {
       // this language will be used as a fallback when a translation isn't
       // found in the current language.
       translate.setDefaultLang('en');

        // the lang to use, if the lang isn't available, it will use the
        // current loader to get them.
       translate.use('he');
   }
}
