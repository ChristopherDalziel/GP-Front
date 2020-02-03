describe("Booking Page Functionality Testing For Users Who Aren't Signed In", function() {
  it("Tests Booking Functions When A Patient Is Signed In And Insures Account Data Is Carried over", function() {
    cy.visit("localhost:3000");
    cy.contains("li", "Log In").click();
    cy.get("input[name=email]").type("cypresstest@test.com");
    cy.get("input[name=password").type("testcypress");
    cy.contains("Submit").click();
    cy.location("pathname").should("eq", "/");
    cy.contains("li", "Book Now").click();
    cy.location("pathname").should("eq", "/booking");
    cy.get(".date-picker").click();
    cy.contains("Next Month").click();
    cy.contains("Next Month").click();
    cy.contains("Next Month").click();
    cy.contains("26").click();
    cy.contains("3:30 PM").click();
    cy.get("input[name=comment]").type(
      "This is a booking made via cypress test"
    );
    cy.contains("Submit").click();
    cy.location("pathname").should("eq", "/success");
    cy.contains("li", "Logout").click();
    cy.location("pathname").should("eq", "/");
  });
});
