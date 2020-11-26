/// <reference types="cypress" />

import { forms_elements } from "../fixtures/forms_elements.js";
import { users_info } from "../fixtures/users_info.js";
import { urls } from "../fixtures/urls.js";

const email = users_info["email"];
const password = users_info["password"];
const firstName = users_info["firstName"];
const lastName = users_info["lastName"];

const registerUrl = urls["registerUrl"];
const registerFirstNameField = forms_elements["registerFirstNameField"];
const registerLastNameField = forms_elements["registerLastNameField"];
const registerSubmitButton = forms_elements["registerSubmitButton"];

const loginUrl = urls["loginUrl"];
const loginUserNameField = forms_elements["loginUserNameField"];
const loginPasswordField = forms_elements["loginPasswordField"];
const loginSubmitButton = forms_elements["loginSubmitButton"];

const loggedInUrlPart = urls["loggedInUrlPart"];

Cypress.Commands.add("register", () => {
  cy.visit(registerUrl);

  cy.get(registerFirstNameField)
    .type(firstName)
    .should("have.value", firstName);
  cy.get(registerLastNameField).type(lastName).should("have.value", lastName);
  cy.get(loginUserNameField).type(email).should("have.value", email);
  cy.get(loginPasswordField).type(password).should("have.value", password);
  cy.get(registerSubmitButton).click();

  cy.url().should("include", loggedInUrlPart);
});

Cypress.Commands.add("login", () => {
  cy.visit(loginUrl);

  cy.get(loginUserNameField).type(email).should("have.value", email);
  cy.get(loginPasswordField).type(password).should("have.value", password);
  cy.get(loginSubmitButton).click();

  cy.url().should("include", loggedInUrlPart);
});
