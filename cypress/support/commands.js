const email = Cypress.env("email");
const password = Cypress.env("password");
const firstName = Cypress.env("firstName");
const lastName = Cypress.env("lastName");

const registerUrl = Cypress.env("registerUrl");
const registerFirstNameField = Cypress.env("registerFirstNameField");
const registerLastNameField = Cypress.env("registerLastNameField");
const registerSubmitButton = Cypress.env("registerSubmitButton");

const loginUrl = Cypress.env("loginUrl");
const loginUserNameField = Cypress.env("loginUserNameField");
const loginPasswordField = Cypress.env("loginPasswordField");
const loginSubmitButton = Cypress.env("loginSubmitButton");

Cypress.Commands.add("register", () => {
  cy.visit(registerUrl);

  cy.get(registerFirstNameField)
    .type(firstName)
    .should("have.value", firstName);
  cy.get(registerLastNameField).type(lastName).should("have.value", lastName);
  cy.get(loginUserNameField).type(email).should("have.value", email);
  cy.get(loginPasswordField).type(password).should("have.value", password);
  cy.get(registerSubmitButton).click();
});

Cypress.Commands.add("login", () => {
  cy.visit(loginUrl);
  cy.get(loginUserNameField).type(email).should("have.value", email);
  cy.get(loginPasswordField).type(password).should("have.value", password);
  cy.get(loginSubmitButton).click();
});
