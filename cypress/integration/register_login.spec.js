/// <reference types="cypress" />

describe("registration/login test", () => {
  it("can verify registration", () => {
    cy.register_user();
  });

  it("can verify login", () => {
    cy.login_user();
  });
});
