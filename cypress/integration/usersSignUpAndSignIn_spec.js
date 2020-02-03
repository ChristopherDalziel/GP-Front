describe("User Sign Up and Sign in Functionality Testing", function() {
  it("Creates a new user account", function() {
    cy.visit("localhost:3000");
    cy.contains("li", "Sign Up").click();
    cy.get("input[name=firstName]").type("Cypress");
    cy.get("input[name=lastName]").type("Test");
    cy.get("input[name=email]").type("cypresstest@test.com");
    cy.get("input[name=phone]").type("0412345678");
    cy.get("input[name=password]").type("testcypress");
    cy.get("input[name=password2]").type("testcypress");
    cy.contains("Submit").click();
    cy.contains("li", "Logout").click();
  });

  it("Signs in the user account that was created by the previous test", function() {
    cy.visit("localhost:3000");
    cy.contains("li", "Log In").click();
    cy.get("input[name=email]").type("cypresstest@test.com");
    cy.get("input[name=password").type("testcypress");
    cy.contains("Submit").click();
    cy.location("pathname").should("eq", "/");
    cy.contains("li", "Logout").click();
    cy.location("pathname").should("eq", "/");
  });
});
