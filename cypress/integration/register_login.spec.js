/// <reference types="cypress" />

describe("registration/login test", () => {
  it("can verify registration", () => {
    cy.register();
  });

  it("can verify login", () => {
    cy.login();
  });
});
