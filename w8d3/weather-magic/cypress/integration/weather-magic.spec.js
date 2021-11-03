// weather-magic.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe("User should load the app, type a city name and see the weather component with city", () => {
	it("should show the app, without the weather section", () => {
		cy.visit("/");
		cy.get("section > h1").should("not.exist");
	});

	it("should accept the user input in the text box", () => {
		cy.get('input[name="city"]').type("Montréal");
	});

	it("should show the weather section with the city name, once the user submits the valid value", () => {
		cy.get("form > button").click();
		// cy.get('input[name="city"]').type("{enter}"); // OR

		cy.get("section > h1").should("be.visible");

		cy.get("[data-testid=location]").should(
			"have.text",
			"Location is: Montréal"
		);
	});
});

describe("User should see the city in the list when searching for a city", () => {
	beforeEach(() => {
		cy.visit("/");
		cy.get('input[name="city"]').type("Montréal");
	});

	it("should show a button with the city name in it", () => {
		cy.get('input[name="city"]').type("{enter}");

		cy.get("div.CityHistoryList ul li").should("have.length", 1);
	});
	it("should not add a button if city is already there", () => {
		cy.get('input[name="city"]').type("{enter}");
		cy.get('input[name="city"]').type("Montréal");
		cy.get('input[name="city"]').type("{enter}");

		cy.get("div.CityHistoryList ul li").should("have.length", 1);
	});
});
