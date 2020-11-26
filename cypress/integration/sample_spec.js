/// <reference types="cypress" />

describe("registration/login test", () => {
  const loggedInUrlPart = Cypress.env("loggedInUrlPart");

  it("can verify registration", () => {
    cy.register();
    cy.url().should("include", loggedInUrlPart);
  });

  it("can verify login", () => {
    cy.login();
    cy.url().should("include", loggedInUrlPart);
  });
});
