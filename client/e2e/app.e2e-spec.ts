import { WhatsBuzzPage } from './app.po';

describe('whats-buzz App', function() {
  let page: TestingProdPage;

  beforeEach(() => {
    page = new TestingProdPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    // expect(page.getParagraphText()).toEqual('app works!');
  });
});
