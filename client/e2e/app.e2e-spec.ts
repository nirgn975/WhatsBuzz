import { WbPage } from './app.po';

describe('wb App', function() {
  let page: WbPage;

  beforeEach(() => {
    page = new WbPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
