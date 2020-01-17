describe("My First Test", function() {
  it("Visits the Homepage", function() {
    cy.visit("localhost:3000");

    cy.contains("Home").click();
    cy.contains("About Us").click();
    cy.contains("Login").click();
    cy.contains("Sign Up").click();
    cy.contains("Contact Us").click();
    cy.contains("Services").click();
    cy.contains("Vaccines").click();
    cy.contains("Home").click();
    cy.contains("Contact Us").click();
    cy.contains("Book Now").click();
    cy.contains("ADMIN FUNCTION");
  });
});
