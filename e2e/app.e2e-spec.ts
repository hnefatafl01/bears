import { AppOnePage } from './app.po';

describe('app-one App', () => {
  let page: AppOnePage;

  beforeEach(() => {
    page = new AppOnePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
