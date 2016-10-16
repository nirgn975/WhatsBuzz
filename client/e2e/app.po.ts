import { browser, element, by } from 'protractor/globals';

export class WbPage {
  navigateTo() {
    return browser.get('/');
  }
}
