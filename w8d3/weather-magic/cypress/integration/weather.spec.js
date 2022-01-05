// weather.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe("Weather App List City Functionality", () => {
  it("Adds a button to our list of previously search cities when a new city is searched.", () => {
    cy.visit("/");

    cy.get("input").type("Montréal");

    cy.get("input").type("{enter}");
    // cy.get("button").click();

    const buttons = cy.get("li > button");

    buttons.should("have.length", 1);
  });
  it("doesn't add a button to our list of previously search cities when a 'old' city is searched.", () => {
    cy.visit("/");

    cy.get("form input.Test").type("Montréal");

    cy.get("input").type("{enter}");
    // cy.get("button").click();

    cy.get("input").type("Montréal");

    cy.get("input").type("{enter}");

    const buttons = cy.get("li > button");

    buttons.should("have.length", 1);
  });
});

describe("Weather component functionality", () => {
  before(() => {
    cy.visit("/");
  });

  it("Doesn't show the weather component on first load", () => {
    cy.get("section").should("not.exist");
  });

  it("Show the weather component when we search for a valid city", () => {
    cy.get("input").type("Montréal");

    cy.get("input").type("{enter}");

    cy.get("section").should("exist");
  });

  it("doesn't show the weather component when we search for an invalid city", () => {
    cy.get("input").type("Toaster Land");

    cy.get("input").type("{enter}");

    cy.get("section").should("not.exist");
  });
});
