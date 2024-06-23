describe("items id view spec", () => {
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

    cy.visit("localhost:3000");
    cy.get('[data-cy="link-items-1-view"]').click();
    cy.get('[data-cy="header-main"]').should("have.text", "Make Item");
    cy.get('[data-cy="link-home"]').click();
  });
});
