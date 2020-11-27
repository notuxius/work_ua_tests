/// <reference types="cypress" />

import { RegisterPage } from "../page_objects/register_page";
import { LoginPage } from "../page_objects/login_page";

const registerPage = new RegisterPage();
const loginPage = new LoginPage();

Cypress.Commands.add("register_user", () => {
  registerPage.navigate();

  registerPage.enter_first_name();
  registerPage.enter_last_name();
  registerPage.enter_email();
  registerPage.enter_password();
  registerPage.submit();
});

Cypress.Commands.add("login_user", () => {
  loginPage.navigate();

  loginPage.enter_email();
  loginPage.enter_password();
  loginPage.submit();
});

Cypress.Commands.add("verify_user_logged_in", () => {
  cy.url().should("include", Cypress.config().loggedInUrlPart);
});
