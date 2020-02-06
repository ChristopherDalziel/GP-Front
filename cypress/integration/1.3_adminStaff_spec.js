describe("Admin Dashboard Staff Functionality and CRUD Testing", function() {
  it("Tests login of an existing admin account and accesses the staff page", function() {
    cy.visit("localhost:3000");
    cy.contains(".navbtn", "Log In").click();
    cy.get("input[name=email]").type("klinikdrleong@gmail.com");
    cy.get("input[name=password").type("eb08ef45");
    cy.contains("Submit").click();
    cy.location("pathname").should("eq", "/");
    cy.get(".dropdown").trigger("mouseover");
    cy.get(".dropdown-content")
      .invoke("show")
      .contains("a", "Staff")
      .click();
    cy.location("pathname").should("eq", "/admin/staff");
  });

  it("Tests creation of a new staff member", function() {
    cy.contains("Add New Staff Member").click();
    cy.location("pathname").should("eq", "/admin/add_staff");
    cy.get("input[name=add_staff]").type("This is a test Doctor");
    cy.get("input[name=position]").type("Test");

    cy.get("textarea").type("This is a test Doctor description");
    cy.contains("Submit").click();
    cy.location("pathname").should("eq", "/admin/staff");
  });

  it("Tests editing of an existing staff member", function() {
    cy.contains("button", "Edit").click();
    cy.get('[type="text"]').clear();
    cy.get("input[name=add_staff]").type("This is an edit test Doctor");
    cy.get("input[name=position]").type("This is an edited position");
    cy.get("textarea").type("This is an edit test Doctor description");
    cy.contains("Submit").click();
    cy.location("pathname").should("eq", "/admin/staff");
  });

  it("Tests deleting of an existing staff member", function() {
    cy.contains("button", "Delete").click();
    cy.location("pathname").should("eq", "/admin/staff");
    cy.visit("localhost:3000");
    cy.wait(1000);
    cy.contains(".navbtn", "Logout").click();
  });
});
