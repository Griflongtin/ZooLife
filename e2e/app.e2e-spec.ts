import { ZoolifePage } from './app.po';

describe('zoolife App', function() {
  let page: ZoolifePage;

  beforeEach(() => {
    page = new ZoolifePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
