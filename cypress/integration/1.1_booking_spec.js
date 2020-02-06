describe("Booking Page Functionality Testing For Users Who Aren't Signed In", function() {
  it("Negative Test: Tests error display when no information is inserted into the booking form", function() {
    cy.visit("localhost:3000");
    cy.contains(".navbtn", "Book Now").click();
    cy.location("pathname").should("eq", "/booking");
    cy.get("input[name=comment]").type(
      "comments, are like comments are testing."
    );
    cy.contains("Submit").click();
    cy.contains("First name is required");
    cy.contains("Last name is required");
    cy.contains("Email is required");
  });

  it("Negative Test: Tests error display when a user inputs an invalid email address", function() {
    cy.visit("localhost:3000");
    cy.contains(".navbtn", "Book Now").click();
    cy.location("pathname").should("eq", "/booking");
    cy.get("input[name=firstName]").type("test = First Name");
    cy.get("input[name=lastName]").type("test = Last Name");
    cy.get("input[name=email]").type("testtesttesttest");
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
    cy.contains("Submit").click();
    cy.contains("Invalid email address");
  });

  it("Negative Test: Tests error display when a user doesn't select an appointment date/time", function() {
    cy.visit("localhost:3000");
    cy.contains(".navbtn", "Book Now").click();
    cy.location("pathname").should("eq", "/booking");
    cy.get("input[name=firstName]").type("test = First Name");
    cy.get("input[name=lastName]").type("test = Last Name");
    cy.get("input[name=email]").type("test@test.com");
    cy.get("input[name=phone]").type("test = 0412 345 678");
    cy.get("input[name=comment]").type(
      "comments, are like comments are testing."
    );
    cy.contains("Submit").click();
    cy.contains(
      "Appointment validation failed: dateTime: Path `dateTime` is required."
    );
  });

  it("Tests Booking Functions When A Patient Isn't Signed In", function() {
    cy.visit("localhost:3000");
    cy.contains(".navbtn", "Book Now").click();
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
    cy.contains("Submit").click();
    cy.location("pathname").should("eq", "/success");
  });
});
