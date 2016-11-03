import { browser, element, by } from 'protractor';

export class WbPage {
  navigateTo() {
    return browser.get('/');
  }
}
