describe("home spec", () => {
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

    cy.visit("localhost:3000");
    cy.get('[data-cy="header-main-home"]').should("have.text", "Home");
  });
});
