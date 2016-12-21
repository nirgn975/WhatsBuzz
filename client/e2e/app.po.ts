import { browser, element, by } from 'protractor';

export class TestingProdPage {
  navigateTo() {
    return browser.get('/');
  }
}
