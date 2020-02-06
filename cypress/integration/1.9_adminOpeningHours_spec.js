describe("Admin About Information EDIT Testing", function() {
  it("Logs into an admin account and accesses to the opening hours page", function() {
    cy.visit("localhost:3000");
    cy.contains(".navbtn", "Log In").click();
    cy.get("input[name=email]").type("klinikdrleong@gmail.com");
    cy.get("input[name=password]").type("eb08ef45");
    cy.contains("Submit").click();
    cy.location("pathname").should("eq", "/");
    cy.get(".dropdown").trigger("mouseover");
    cy.get(".dropdown-content")
      .invoke("show")
      .contains("a", "Klinik Hours")
      .click();
  });

  it("Puts test values into each field to edit the current values", function() {
    cy.get('[type="text"]').clear();
    cy.get("input[name=Monday]").type("This");
    cy.get("input[name=Tuesday]").type("Is");
    cy.get("input[name=Wednesday]").type("A");
    cy.get("input[name=Thursday]").type("Cypress");
    cy.get("input[name=Friday]").type("Test");
    cy.get("input[name=Saturday]").type("Example");
    cy.get("input[name=Sunday]").type("!");
    cy.contains("Submit").click();
    cy.location("pathname").should("eq", "/contact");
  });

  it("Checks the new values displayed on the contact page are correct", function() {
    cy.contains("Monday: This");
    cy.contains("Tuesday: Is");
    cy.contains("Wednesday: A");
    cy.contains("Thursday: Cypress");
    cy.contains("Friday: Test");
    cy.contains("Saturday: Example");
    cy.contains("Sunday: !");
  });

  it("Changes the test values back to their correct values", function() {
    cy.get(".dropdown").trigger("mouseover");
    cy.get(".dropdown-content")
      .invoke("show")
      .contains("a", "Klinik Hours")
      .click();
    cy.get('[type="text"]').clear();
    cy.wait(1000);
    cy.get("input[name=Monday]").type("8:30am - 9:30pm");
    cy.get("input[name=Tuesday]").type("8:30am - 9:30pms");
    cy.get("input[name=Wednesday]").type("8:30am - 9:30pm");
    cy.get("input[name=Thursday]").type("8:30am - 9:30pm");
    cy.get("input[name=Friday]").type("8:30am - 9:30pm");
    cy.get("input[name=Saturday]").type("8:30am - 9:30pm");
    cy.get("input[name=Sunday]").type("8:30am - 2pm");
    cy.contains("Submit").click();
    cy.location("pathname").should("eq", "/contact");
    cy.contains(".navbtn", "Logout").click();
    cy.location("pathname").should("eq", "/");
  });
});
