export class LoginPage {
  constructor() {
    this.userNameField = "#user-login";
    this.userPasswordField = "#password";
    this.submitButton = "button[type=submit]";
  }

  navigate() {
    cy.visit(Cypress.config().baseUrl + "jobseeker/login/");
  }

  enter_email() {
    cy.get(this.userNameField)
      .type(Cypress.config().userEmail)
      .should("have.value", Cypress.config().userEmail);
  }

  enter_password() {
    cy.get(this.userPasswordField)
      .type(Cypress.config().userPassword)
      .should("have.value", Cypress.config().userPassword);
  }

  submit() {
    cy.get(this.submitButton).click();
    cy.verify_user_logged_in();
  }
}
