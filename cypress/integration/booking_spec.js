describe("Booking Page Functionality Testing", function() {
  it("Tests Booking Page", function() {
    // Testing Booking Now form

    cy.visit("localhost:3000");

    cy.contains("li", "Book Now").click();

    cy.contains("Book Now").click();
    cy.location("pathname").should("eq", "/booking");
    cy.get("input[name=firstName]").type("test = First Name");
    cy.get("input[name=lastName]").type("test = Last Name");
    cy.get("input[name=email]").type("test@testeremail.test");
    cy.get("input[name=phone]").type("test = 0412 345 678");
    // cy.get("input[name=dateTime]").click();
    // cy.get("dateTime").click();
    cy.get("input[name=comment]").type(
      "comments, are like comments are testing."
    );
  });
});
