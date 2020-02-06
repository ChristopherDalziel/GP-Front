describe("Profile Page User Account Profile Update and Booking Cancellation Testing ", function() {
  it("Logs into a standard user/patient account and accesses the profile page", function() {
    cy.visit("localhost:3000");
    cy.contains(".navbtn", "Log In").click();

    cy.get("input[name=email]").type("cypresstestTWO@test.com");
    cy.get("input[name=password").type("testcypress");
    cy.contains("Submit").click();
    cy.location("pathname").should("eq", "/");
    cy.contains(".navbtn", "Profile").click();
    cy.location("pathname").should("eq", "/profile");
  });

  it("Cancels one of the users/patients appointments", function() {
    cy.contains("button", "Cancel").click();
  });

  it("Updates the users/patients profile information", function() {
    cy.get('[type="text"]').clear();
    cy.get('[type="email"]').clear();
    cy.get("input[name=firstName]").type("Cypress Profile Update First Name");
    cy.get("input[name=lastName]").type("Cypress Profile Update Last Name");
    cy.get("input[name=email]").type("cypresstestPROFILEUPDATE@test.com");
    cy.get("input[name=phone]").type("0412121121");
    cy.contains("button", "Update").click();
    cy.location("pathname").should("eq", "/profile");
    cy.contains(".navbtn", "Logout").click();
    cy.location("pathname").should("eq", "/");
  });

  it("Tests the updates were successful by re-logging into the account with the new information", function() {
    cy.contains(".navbtn", "Log In").click();
    cy.get("input[name=email]").type("cypresstestPROFILEUPDATE@test.com");
    cy.get("input[name=password").type("testcypress");
    cy.contains("Submit").click();
    cy.location("pathname").should("eq", "/");
    cy.visit("localhost:3000");
    cy.wait(1000);
    cy.contains(".navbtn", "Logout").click();
    cy.location("pathname").should("eq", "/");
  });
});
