describe("React Weather", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Shows Berlin as the default city", () => {
    cy.get('[data-cy="search-input"]')
      .should("be.visible")
      .should("have.value", "Berlin");
    cy.get('[data-cy="city"]').should("contain.text", "Berlin");
  });
  it("Can search for different cities", () => {
    cy.get('[data-cy="dashboard-search"]')
      .find('[data-cy="search-input"]')
      .clear();

    cy.get('[data-cy="dashboard-search"]')
      .find('[data-cy="search-button"]')
      .should("be.disabled");

    cy.get('[data-cy="dashboard-search"]')
      .find('[data-cy="search-input"]')
      .should("be.visible")
      .type("Vienna");

    cy.get('[data-cy="dashboard-search"]')
      .find('[data-cy="search-button"]')
      .should("be.enabled")
      .click();

    cy.get('[data-cy="city"]').should("contain.text", "Vienna");
  });
  it("Can add/remove cities from favorite list", () => {
    cy.get('[data-cy="favorite-button"]').should("be.enabled").click();
    cy.get('[data-cy="favorite-Berlin"]').should("exist");
    cy.get('[data-cy="dashboard-search"]')
      .find('[data-cy="search-input"]')
      .clear();
    cy.get('[data-cy="dashboard-search"]')
      .find('[data-cy="search-input"]')
      .type("Vienna");
    cy.get('[data-cy="dashboard-search"]')
      .find('[data-cy="search-button"]')
      .should("be.enabled")
      .click();
    cy.get('[data-cy="favorite-button"]').should("be.enabled").click();

    cy.get('[data-cy="favorite-Vienna"]').should("exist");

    cy.get('[data-cy="remove-favorite-Berlin"]').should("be.enabled").click();
    cy.get('[data-cy="favorite-Berlin"]').should("not.exist");
  });
});
