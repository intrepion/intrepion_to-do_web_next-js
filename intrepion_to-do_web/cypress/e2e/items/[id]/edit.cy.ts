describe("items id edit spec", () => {
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
    cy.intercept("PUT", "/api/items/1", {}).as("itemsIdEdit");

    cy.visit("localhost:3000");
    cy.get('[data-cy="link-items-1-edit"]').click();
    cy.get('[data-cy="header-main"]').should("have.text", "Edit Item");
    cy.get('[data-cy="textbox-title"]').type("{selectall}{del}test title");
    cy.get('[data-cy="button-edit"]').click();
  });
});
