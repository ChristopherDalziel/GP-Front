describe("User Sign Up and Sign in Functionality Testing", function() {
  it("Negative Test: Fails to sign up for an account with required form fields empty", function() {
    cy.visit("localhost:3000");
    cy.contains("li", "Sign Up").click();
    cy.get("input[name=password]").type("testcypress");
    cy.contains("button", "Submit").click();
    cy.contains("First name is required");
    cy.contains("Email is required");
    cy.contains(
      "A phone number is required im case the clinic needs to contact you regarding any issues"
    );
    cy.contains("Passwords do not match");
  });

  it("Negative Test: Fails to sign up for an account without a validated email address", function() {
    cy.visit("localhost:3000");
    cy.contains("li", "Sign Up").click();
    cy.get("input[name=firstName]").type("Cypress");
    cy.get("input[name=lastName]").type("Test");
    cy.get("input[name=email]").type("testtest");
    cy.get("input[name=phone]").type("0412345678");
    cy.get("input[name=password]").type("testcypress");
    cy.get("input[name=password2]").type("testcypress");
    cy.contains("Submit").click();
  });

  it("Negative Test: Fails to create a new user account because the entered passwords do not match", function() {
    cy.visit("localhost:3000");
    cy.contains("li", "Sign Up").click();
    cy.get("input[name=firstName]").type("Cypress");
    cy.get("input[name=lastName]").type("Test");
    cy.get("input[name=email]").type("cypresstest@test.com");
    cy.get("input[name=phone]").type("0412345678");
    cy.get("input[name=password]").type("testcypress");
    cy.get("input[name=password2]").type("incorrectpassword");
    cy.contains("Submit").click();
  });

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

  it("Negative Test: Fails to create a new user account with an email address that is already associated with another account", function() {
    cy.visit("localhost:3000");
    cy.contains("li", "Sign Up").click();
    cy.get("input[name=firstName]").type("Cypress");
    cy.get("input[name=lastName]").type("Test");
    cy.get("input[name=email]").type("cypresstest@test.com");
    cy.get("input[name=phone]").type("0412345678");
    cy.get("input[name=password]").type("testcypress");
    cy.get("input[name=password2]").type("testcypress");
    cy.contains("Submit").click();
    cy.contains("User validation failed: email: Error: Email already exists");
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
