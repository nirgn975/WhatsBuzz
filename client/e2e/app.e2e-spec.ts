import { WhatsbuzzPage } from './app.po';

describe('whatsbuzz App', () => {
  let page: WhatsbuzzPage;

  beforeEach(() => {
    page = new WhatsbuzzPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
