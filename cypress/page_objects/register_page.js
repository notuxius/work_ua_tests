import { LoginPage } from "./login_page";
const loginPage = new LoginPage();

export class RegisterPage {
  constructor() {
    this.userFirstNameField = "#first_name";
    this.userLastNameField = "#last_name";
    this.submitButton = "input[type=submit]";
  }

  navigate() {
    cy.visit(Cypress.config().baseUrl + "jobseeker/register/");
  }

  enter_first_name() {
    cy.get(this.userFirstNameField)
      .type(Cypress.config().userFirstName)
      .should("have.value", Cypress.config().userFirstName);
  }

  enter_last_name() {
    cy.get(this.userLastNameField)
      .type(Cypress.config().userLastName)
      .should("have.value", Cypress.config().userLastName);
  }

  enter_email() {
    loginPage.enter_email();
  }

  enter_password() {
    loginPage.enter_password();
  }

  submit() {
    cy.get(this.submitButton).click();
    cy.verify_user_logged_in();
  }
}
