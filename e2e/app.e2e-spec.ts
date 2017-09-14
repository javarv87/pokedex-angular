import { PokemonAngularPage } from './app.po';

describe('pokemon-angular App', () => {
  let page: PokemonAngularPage;

  beforeEach(() => {
    page = new PokemonAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
