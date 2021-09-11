describe('App', () => {
  it('should be visible', () => {
    cy.visit('http://localhost:3000');
    cy.get('h4').contains('This is a simple boilerplate');
  });
});

// eslint-disable-next-line jest/no-export
export default {};
