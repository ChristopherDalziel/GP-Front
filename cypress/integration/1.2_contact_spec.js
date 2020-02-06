describe("Contact Page Functionality Testing", function() {
  it("Tests Contact Us Page", function() {
    cy.visit("localhost:3000");
    cy.contains(".navbtn", "Contact Us").click();
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
    cy.contains("Submit").click();
  });
});
