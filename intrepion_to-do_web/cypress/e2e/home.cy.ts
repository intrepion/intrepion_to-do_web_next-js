describe("home spec", () => {
  it("passes", () => {
    cy.visit("localhost:3000");
    cy.get('[data-cy="header-main-home"]').should("have.text", "Home");
  });
});
