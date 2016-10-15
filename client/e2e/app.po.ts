import { browser, element, by } from 'protractor/globals';

export class WbPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('wb-root h1')).getText();
  }
}
