import { AvaWebPage } from './app.po';

describe('ava-web App', () => {
  let page: AvaWebPage;

  beforeEach(() => {
    page = new AvaWebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
