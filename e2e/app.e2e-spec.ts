import { NgCountdownjsPage } from './app.po';

describe('ng-countdownjs App', () => {
  let page: NgCountdownjsPage;

  beforeEach(() => {
    page = new NgCountdownjsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
