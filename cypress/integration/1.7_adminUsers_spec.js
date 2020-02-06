describe("Admin Dashboard Users Functionality and Edit Testing", function() {
  it("Tests login of an existing admin user/ and accesses the users page", function() {
    cy.visit("localhost:3000");
    cy.contains(".navbtn", "Log In").click();
    cy.get("input[name=email]").type("klinikdrleong@gmail.com");
    cy.get("input[name=password").type("eb08ef45");
    cy.contains("Submit").click();
    cy.location("pathname").should("eq", "/");
    cy.get(".dropdown").trigger("mouseover");
    cy.get(".dropdown-content")
      .invoke("show")
      .contains("a", "Users")
      .click();
  });

  it("Tests editing of an existing user patient", function() {
    // Due to the invoked menu above I need to use visit to get to the correct path without convering the form below
    cy.visit("http://localhost:3000/admin/users");
    cy.wait(500);
    cy.contains("button", "Edit").click();
    cy.get('[type="email"]').clear();
    cy.get('[type="text"]').clear();
    cy.wait(500);
    cy.get("input[name=firstName]").type("Editing a User as an Admin");
    cy.get("input[name=lastName]").type("Editing a User as an Admin");
    cy.get("input[name=email]").type("editedEMAIL@editedemail.com");
    cy.get("input[name=phone]").type("0412345678");
    cy.contains("Update").click();
    cy.wait(500);
    cy.visit("localhost:3000");
    cy.wait(1000);
    cy.contains(".navbtn", "Logout").click();
    cy.location("pathname").should("eq", "/");
  });
});
