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

    // Testing of Contact Us form

    cy.contains("Email Us Directly").click();
    cy.location("pathname").should("eq", "/contact");
    cy.get("input[name=first_name]").type("test = First Name");
    cy.get("input[name=last_name]").type("test = Last Name");
    cy.get("input[name=contact_number]").type("test = 0412 345 678");
    cy.get("input[name=subject]").type(
      "test = the subject of the test email is test subject"
    );
    cy.get("input[name=email]").type("test@testeremail.test");
    cy.get("input[name=message]").type("testing, tester, test email test");
    // cy.contains("Submit").click();

    cy.contains("li", "Home").click();

    // Testing Booking Now form

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
