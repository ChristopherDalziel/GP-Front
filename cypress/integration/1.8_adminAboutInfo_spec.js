describe("Admin About Information EDIT Testing", function() {
  it("Logs into an admin account and accesses to the about page", function() {
    cy.visit("localhost:3000");
    cy.contains(".navbtn", "Log In").click();
    cy.get("input[name=email]").type("klinikdrleong@gmail.com");
    cy.get("input[name=password]").type("eb08ef45");
    cy.contains("Submit").click();
    cy.location("pathname").should("eq", "/");
    cy.contains("About Us").click();
    cy.location("pathname").should("eq", "/about");
  });

  it("Checks the Edit button and accesses the form to edit the about and the general doctor information", function() {
    cy.contains("button", "Edit").click();
    cy.get("input[name=about]").type("This about was written in a test");
    cy.get("input[name=drInfo]").type(
      "This doctor information was written in a test"
    );
    cy.wait(1000);
    cy.contains("Submit").click();
    cy.wait(1000);
    cy.location("pathname").should("eq", "/about");
  });

  it("Checks the About information was passed from the form onto the about page", function() {
    cy.contains("This about was written in a test");
    cy.contains("This doctor information was written in a test");
    cy.visit("localhost:3000");
    cy.wait(1000);
    cy.contains(".navbtn", "Logout").click();
    cy.location("pathname").should("eq", "/");
  });
});
