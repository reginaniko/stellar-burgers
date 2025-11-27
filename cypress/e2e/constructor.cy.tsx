/// <reference types="cypress" />
describe('E2E: main page and ingredient modal', function () {
  beforeEach(() => {
    cy.intercept('GET', '/api/ingredients', { fixture: 'ingredients.json' });
    cy.intercept('GET', '/api/auth/user', { fixture: 'user.json' });
    cy.visit('/');
  });

  afterEach(() => {
    cy.clearLocalStorage();
    cy.clearCookies();
  });

  it('adds selected ingredients to the constructor', function () {
    cy.get('[data-cy=buns]').as('buns');
    cy.get('[data-cy=mains]').as('mains');
    cy.get('[data-cy=sauces]').as('sauces');

    cy.get('@buns').contains('Add').click();
    cy.get('@mains').contains('Add').click();
    cy.get('@sauces').contains('Add').click();

    cy.get('.constructor-element_pos_top').as('constructorTop');
    cy.get('@constructorTop').contains('N-200i Crater Bun (top)');
    cy.get('.constructor-element').as('constructorMiddle');
    cy.get('@constructorMiddle').contains('Mars Magnolia Bio-Patty');
    cy.get('.constructor-element_pos_bottom').as('constructorBottom');
    cy.get('@constructorBottom').contains('N-200i Crater Bun (bottom)');

    cy.get('.move_button').as('moveButtons');
    cy.get('@moveButtons').then((buttons) => {
      const moveDownButton = buttons[1];
      moveDownButton.click();
      cy.get('.constructor-element').as('constructorMiddle');
      cy.get('@constructorMiddle').contains('Spicy-X Sauce');
    });
  });

  it('does not show any modal on initial load', function () {
    cy.get('#modals').children().should('have.length', 0);
  });

  it('opens ingredient details modal on card click', function () {
    cy.contains('Signature Space Sauce').click();
    cy.get('#modals').children().should('have.length', 2);
    cy.get('#modals').contains('Signature Space Sauce');
  });

  it('closes ingredient modal when close button is clicked', function () {
    cy.contains('Signature Space Sauce').click();
    cy.get('#modals').find('button').click();
    cy.get('#modals').children().should('have.length', 0);
  });

  it('closes ingredient modal when Escape key is pressed', function () {
    cy.contains('Signature Space Sauce').click();
    cy.get('body').type('{esc}');
    cy.get('#modals').children().should('have.length', 0);
  });
});

describe('E2E: order creation flow', function () {
  beforeEach(() => {
    cy.intercept('GET', '/api/ingredients', { fixture: 'ingredients.json' });
    cy.intercept('POST', '/api/auth/login', { fixture: 'user.json' });
    cy.intercept('GET', '/api/auth/user', { fixture: 'user.json' });
    cy.intercept('POST', '/api/orders', { fixture: 'order.json' });
    cy.visit('/');
    cy.setCookie('accessToken', 'accessToken');
    window.localStorage.setItem('refreshToken', 'refreshToken');
  });

  afterEach(() => {
    cy.clearLocalStorage();
    cy.clearCookies();
  });

  it('allows a logged-in user to place an order', function () {
    cy.get('[data-cy=buns]').as('buns');
    cy.get('[data-cy=mains]').as('mains');
    cy.get('[data-cy=sauces]').as('sauces');

    cy.get('@buns').contains('Add').click();
    cy.get('@mains').contains('Add').click();
    cy.get('@sauces').contains('Add').click();

    cy.contains('Place Order').click();
    cy.get('#modals').children().should('have.length', 2);
    cy.get('#modals').find('h2').contains(51061);
    cy.get('body').type('{esc}');
    cy.get('#modals').children().should('have.length', 0);

    cy.get('.text_type_main-default').contains('Choose buns');
    cy.get('.text_type_main-default').contains('Choose toppings');
  });
});
