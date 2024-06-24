describe("items id drop spec", () => {
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
    cy.intercept("GET", "/api/items/1", {
      item: {
        completed: false,
        id: 1,
        title: "test title",
        visible: true,
      },
    }).as("itemsIdView");
    cy.intercept("DELETE", "/api/items/1", {}).as("itemsIdDrop");

    cy.visit("localhost:3000");
    cy.get('[data-cy="link-items-1-drop"]').click();
    cy.get('[data-cy="header-main"]').should("have.text", "Drop Item");
    cy.get('[data-cy="button-drop"]').click();
  });
});
