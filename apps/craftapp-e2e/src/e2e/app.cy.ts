import { getButton } from '../support/app.po';

describe('craftapp', () => {
  beforeEach(() => cy.visit('/'));

  it('should display the button', () => {
    // Custom command example, see `../support/commands.ts` file
    // cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getButton().contains('Button');
  });
});
