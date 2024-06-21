describe("template spec", () => {
  it("passes", () => {
    cy.visit("localhost:3000");
    cy.get('[data-cy="main header"]').should("have.text", "Items");
  });
});
