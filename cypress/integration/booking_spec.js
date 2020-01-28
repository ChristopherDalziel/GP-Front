describe("Booking Page Functionality Testing", function() {
  it("Tests Booking Functions When A Patient Is Signed In", function() {
    cy.visit("localhost:3000");
    cy.contains("li", "Log In").click();
    cy.get("input[name=email]").type("klinikdrleong@gmail.com");
    cy.get("input[name=password").type("eb08ef45");
    cy.contains("Submit").click();
  });

  it("Tests Booking Functions When A Patient Isn't Signed In", function() {
    cy.contains("li", "Book Now").click();
    cy.location("pathname").should("eq", "/booking");
    cy.get("input[name=firstName]").type("test = First Name");
    cy.get("input[name=lastName]").type("test = Last Name");
    cy.get("input[name=email]").type("christopher.dalziel@icloud.com");
    cy.get("input[name=phone]").type("test = 0412 345 678");
    cy.get(".date-picker").click();
    cy.contains("Next Month").click();
    cy.contains("Next Month").click();
    cy.contains("Next Month").click();
    cy.contains("Next Month").click();
    cy.contains("30").click();
    cy.contains("3:30 PM").click();
    cy.get("input[name=comment]").type(
      "comments, are like comments are testing."
    );
    // cy.contains("Submit").click();
    cy.location("pathname").should("eq", "/success");
  });
});
