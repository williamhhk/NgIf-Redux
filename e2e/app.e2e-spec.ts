import { ObjectListPage } from './app.po';

describe('object-list App', () => {
  let page: ObjectListPage;

  beforeEach(() => {
    page = new ObjectListPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
