import { AngelAppPage } from './app.po';

describe('angel-app App', () => {
  let page: AngelAppPage;

  beforeEach(() => {
    page = new AngelAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
