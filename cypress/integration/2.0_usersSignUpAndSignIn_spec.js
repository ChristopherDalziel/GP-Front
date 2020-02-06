describe("User Sign Up and Sign in Functionality Testing", function() {
  it("Negative Test: Fails to sign up for an account with required form fields empty", function() {
    cy.visit("localhost:3000");
    cy.contains(".navbtn", "Sign Up").click();
    cy.get("input[name=password]").type("testcypress");
    cy.contains("button", "Submit").click();
    cy.contains("First name is required");
    cy.contains("Last name is required");
    cy.contains("Email is required");
    cy.contains(
      "A phone number is required im case the clinic needs to contact you regarding any issues"
    );
    cy.contains("Passwords do not match");
  });

  it("Negative Test: Fails to sign up for an account without a validated email address", function() {
    cy.visit("localhost:3000");
    cy.contains(".navbtn", "Sign Up").click();
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
    cy.contains(".navbtn", "Sign Up").click();
    cy.get("input[name=firstName]").type("Cypress");
    cy.get("input[name=lastName]").type("Test");
    cy.get("input[name=email]").type("cypresstestTWO@test.com");
    cy.get("input[name=phone]").type("0412345678");
    cy.get("input[name=password]").type("testcypress");
    cy.get("input[name=password2]").type("incorrectpassword");
    cy.contains("Submit").click();
  });

  it("Creates a new user account", function() {
    cy.visit("localhost:3000");
    cy.wait(500);
    cy.contains(".navbtn", "Sign Up").click();
    cy.wait(500);
    cy.get('[type="text"]').clear();
    cy.get('[type="email"]').clear();
    cy.get('[type="password"]').clear();
    cy.wait(1000);
    cy.get("input[name=firstName]").type("Cypress");
    cy.get("input[name=lastName]").type("Test");
    cy.get("input[name=email]").type("cypresstestTWO@test.com");
    cy.wait(500);
    cy.get("input[name=phone]").type("0412345678");
    cy.get("input[name=password]").type("testcypress");
    cy.get("input[name=password2]").type("testcypress");
    cy.wait(500);
    cy.contains("Submit").click();
    cy.wait(1500);
    cy.visit("localhost:3000");
    cy.wait(500);
    cy.contains(".navbtn", "Logout").click();
  });

  it("Negative Test: Fails to create a new user account with an email address that is already associated with another account", function() {
    cy.visit("localhost:3000");
    cy.contains(".navbtn", "Sign Up").click();
    cy.wait(1000);
    cy.get("input[name=firstName]").type("Cypress");
    cy.get("input[name=lastName]").type("Test");
    cy.get("input[name=email]").type("cypresstestTWO@test.com");
    cy.get("input[name=phone]").type("0412345678");
    cy.get("input[name=password]").type("testcypress");
    cy.get("input[name=password2]").type("testcypress");
    cy.contains("Submit").click();
    cy.contains("User validation failed: email: Error: Email already exists");
  });

  it("Negative Test: Fails to sign into an when both form fields aren't entered, or have incorrect information entered (Eg: Incorrect password or email)", function() {
    cy.visit("localhost:3000");
    cy.contains(".navbtn", "Log In").click();
    cy.wait(500);
    cy.get("input[name=email]").type("cypresstestTWO@test.com");
    cy.contains("Submit").click();
    cy.contains("Authentication failed, unable to log in");
  });

  it("Signs in the user account that was created by the previous test", function() {
    cy.visit("localhost:3000");
    cy.contains(".navbtn", "Log In").click();
    cy.get("input[name=email]").type("cypresstestTWO@test.com");
    cy.get("input[name=password").type("testcypress");
    cy.contains("Submit").click();
    cy.location("pathname").should("eq", "/");
    cy.visit("localhost:3000");
    cy.wait(1000);
    cy.contains(".navbtn", "Logout").click();
    cy.location("pathname").should("eq", "/");
  });
});
