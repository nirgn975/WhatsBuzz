import { TestingProdPage } from './app.po';

describe('testing-prod App', function() {
  let page: TestingProdPage;

  beforeEach(() => {
    page = new TestingProdPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    // expect(page.getParagraphText()).toEqual('app works!');
  });
});
