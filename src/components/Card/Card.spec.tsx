// eslint-disable-next-line import/no-extraneous-dependencies
import { mount } from '@cypress/react';
import Card from './Card';

it('Card', () => {
  mount(<Card />);
  cy.get('h4').contains('This is a simple boilerplate');
  cy.get('p').contains('Why was it created?');
});
