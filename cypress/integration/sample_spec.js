/// <reference types="cypress" />

const { MailServerControllerApiFactory } = require("mailslurp-client");

describe("Work.ua register/login test", () => {
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

  const loggedInUrlPart = Cypress.env("loggedInUrlPart");

  // let inboxId;
  // let emailAddress;

  it("can generate a new email address and register", () => {
    // Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    //   return false;
    // });

    // cy.createInbox().then((inbox) => {
    // verify a new inbox was created
    //   assert.isDefined(inbox);

    // save the inboxId for later checking the emails
    //   inboxId = inbox.id;
    //   emailAddress = inbox.emailAddress;

    // register with inbox email address and the password
    cy.visit(registerUrl);

    cy.get(registerFirstNameField)
      .type(firstName)
      .should("have.value", firstName);
    cy.get(registerLastNameField).type(lastName).should("have.value", lastName);
    cy.get(loginUserNameField).type(email).should("have.value", email);
    cy.get(loginPasswordField).type(password).should("have.value", password);
    cy.get(registerSubmitButton).click();

    cy.url().should("include", loggedInUrlPart);
    // });
  });

  it("can verify sucessful login", () => {
    cy.visit(loginUrl);
    cy.get(loginUserNameField).type(email).should("have.value", email);
    cy.get(loginPasswordField).type(password).should("have.value", password);
    cy.get(loginSubmitButton).click();

    cy.url().should("include", loggedInUrlPart);
  });

  // let code;

  // it("can receive register email and extract register link", () => {
  //   cy.waitForLatestEmail(inboxId).then((email) => {
  //     assert.isDefined(email);

  //     // console.log(email.body[1]);
  //     assert.strictEqual(/123/.test(email.body), true);

  //     code = /([0-9]{6})$/.exec(email.body[1]);

  //     //visit email link
  //
  //   });
  // });
});
