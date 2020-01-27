describe("Nav Functionality Testing", function() {
  it("Clicks all links", function() {
    cy.visit("localhost:3000");
    cy.contains("li", "Home").click();
    cy.contains("About Us").click();
    cy.location("pathname").should("eq", "/about");
    cy.contains("Our Doctors");
    cy.contains("li", "Services").click();
    cy.location("pathname").should("eq", "/services");
    cy.contains("li", "Book Now").click();
    cy.location("pathname").should("eq", "/booking");
    cy.contains("li", "Contact Us").click();
    cy.location("pathname").should("eq", "/contact");

    // Logging into an Admin Account for more testing
    cy.contains("Log In").click();
    cy.get("input[name=email]").type("klinikdrleong@gmail.com");
    cy.get("input[name=password").type("eb08ef45");
    cy.contains("Submit").click();

    // Admin Nav Tests
    cy.contains("li", "Admin Dashboard").click();
    cy.location("pathname").should("eq", "/admin_dashboard");
  });
});
