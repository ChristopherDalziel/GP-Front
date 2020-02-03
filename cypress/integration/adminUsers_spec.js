describe("Admin Dashboard Users Functionality and Edit Testing", function() {
  it("Tests login of an existing admin user/ and accesses the users page", function() {
    cy.visit("localhost:3000");

    cy.contains("li", "Log In").click();
    cy.get("input[name=email]").type("klinikdrleong@gmail.com");
    cy.get("input[name=password").type("eb08ef45");
    cy.contains("Submit").click();
    cy.location("pathname").should("eq", "/");
    cy.get(".dropdown").trigger("mouseover");
    cy.get(".dropdown-content")
      .invoke("show")
      .contains("li", "Users")
      .click();
    cy.location("pathname").should("eq", "/admin/users");
  });

  it("Tests editing of an existing user patient", function() {
    cy.contains("button", "Edit").click();
    cy.get('[type="text"]').clear();
    cy.get('[type="email"]').clear();
    cy.get("input[name=firstName]").type("Editing a User as an Admin");
    cy.get("input[name=lastName]").type("Editing a User as an Admin");
    cy.get("input[name=email]").type("editedEMAIL@editedemail.com");
    cy.get("input[name=phone]").type("0412345678");
    cy.contains("Update").click();
    cy.location("pathname").should("eq", "/admin/users");
    cy.contains("li", "Logout").click();
  });
});
