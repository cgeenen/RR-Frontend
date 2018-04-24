import { RekRijderAngularAppPage } from './app.po';

describe('rek-rijder-angular-app App', function() {
  let page: RekRijderAngularAppPage;

  beforeEach(() => {
    page = new RekRijderAngularAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
