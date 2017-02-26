import { NotesPage } from './app.po';

describe('notes App', function() {
  let page: NotesPage;

  beforeEach(() => {
    page = new NotesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
