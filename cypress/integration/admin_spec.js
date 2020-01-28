describe("Admin Functionality Testing", function() {
  it("Tests Login Of An Existing Admin Account", function() {
    cy.visit("localhost:3000");

    cy.contains("li", "Log In").click();
    cy.get("input[name=email]").type("klinikdrleong@gmail.com");
    cy.get("input[name=password").type("eb08ef45");
    cy.contains("Submit").click();
    cy.location("pathname").should("eq", "/");
    cy.contains("li", "Admin Dashboard").click();
    cy.location("pathname").should("eq", "/admin/staff");
  });

  it("Tests Creating A New Staff Member", function() {
    cy.contains("Add New Staff Member").click();
    cy.location("pathname").should("eq", "/admin/add_staff");
    cy.get("input[name=add_staff]").type("This is a test Doctor");
    cy.get("textarea").type("This is a test Doctor description");
    cy.contains("Submit").click();
    cy.location("pathname").should("eq", "/admin/staff");
  });

  it("Tests Editing Of An Existing Staff Member", function() {
    cy.contains("Edit").click();
    cy.get('[type="text"]').clear();
    cy.get(".edit_staff input").type("This is an edit test Doctor");
    cy.get("textarea").type("This is an edit test Doctor description");
    cy.contains("Submit").click();
    cy.location("pathname").should("eq", "/admin/staff");
  });

  // Creating, Editing, Deletion of Vaccines

  // Creating, Editing, Deletion of Services

  // Creating, Editing, Deleting appointments
});
