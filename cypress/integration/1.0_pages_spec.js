describe("Checks Components Are Present On Pages", function() {
  it("Tests About Page Components", function() {
    cy.visit("localhost:3000");
    cy.contains(".navbtn", "About Us").click();
    cy.location("pathname").should("eq", "/about");
    cy.get(".doctors").should("be.visible");
  });

  it("Tests Services Page Components", function() {
    cy.contains(".navbtn", "Services").click();
    cy.location("pathname").should("eq", "/services");
    cy.get(".serviceContainer").should("be.visible");
  });

  it("Tests Vaccines Page Components", function() {
    cy.contains(".navbtn", "Vaccines").click();
    cy.location("pathname").should("eq", "/vaccines");
    cy.get(".vaccineContainer").should("be.visible");
  });

  it("Tests Contact Page Components", function() {
    cy.contains(".navbtn", "Contact Us").click();
    cy.location("pathname").should("eq", "/contact");
    cy.get(".info-container-opening-hours").should("be.visible");
    cy.get(".google-map").should("be.visible");
  });
});
