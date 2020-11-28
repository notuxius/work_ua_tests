export class LoginPage {
  constructor() {
    (this.userEmail = Cypress.env().work_ua_user_email),
      (this.userPassword = Cypress.env().work_ua_user_password),
      (this.userNameField = "#user-login");
    this.userPasswordField = "#password";
    this.submitButton = "button[type=submit]";
  }

  navigate() {
    cy.visit(Cypress.config().baseUrl + "jobseeker/login/");
  }

  enter_email() {
    cy.get(this.userNameField)
      .type(this.userEmail)
      .should("have.value", this.userEmail);
  }

  enter_password() {
    cy.get(this.userPasswordField)
      .type(this.userPassword)
      .should("have.value", this.userPassword);
  }

  submit() {
    cy.get(this.submitButton).click();
    cy.verify_user_logged_in();
  }
}
