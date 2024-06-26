describe("items make spec", () => {
  it("passes", () => {
    cy.intercept("GET", "/api/items", {
      items: [
        {
          completed: false,
          id: 1,
          title: "test title",
          visible: true,
        },
      ],
    }).as("itemsView");
    cy.intercept("POST", "/api/items", {}).as("itemsMake");

    cy.visit("localhost:3000");
    cy.get('[data-cy="link-items-make"]').click();
    cy.get('[data-cy="header-main"]').should("have.text", "Make Item");
    cy.get('[data-cy="textbox-title"]').type("test title");
    cy.get('[data-cy="button-items-make"]').click();
  });
});
