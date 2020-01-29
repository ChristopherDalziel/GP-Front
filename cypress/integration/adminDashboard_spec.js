
describe("Admin Dashboard Functionality and CRUD Testing", function() {
  it("Tests login of an existing admin user/account", function() {
    cy.visit("localhost:3000");

    cy.contains("li", "Log In").click();
    cy.get("input[name=email]").type("klinikdrleong@gmail.com");
    cy.get("input[name=password").type("eb08ef45");
    cy.contains("Submit").click();
    cy.location("pathname").should("eq", "/");
    cy.contains("li", "Admin Dashboard").click();
    cy.location("pathname").should("eq", "/admin/staff");
  });


  it("Tests creation of a new staff member", function() {
    cy.contains("Add New Staff Member").click();
    cy.location("pathname").should("eq", "/admin/add_staff");
    cy.get("input[name=add_staff]").type("This is a test Doctor");
    cy.get("textarea").type("This is a test Doctor description");
    cy.contains("Submit").click();
    cy.location("pathname").should("eq", "/admin/staff");
  });

  it("Tests editing of an existing staff member", function() {
    cy.contains("Edit").click();
    cy.get('[type="text"]').clear();
    cy.get(".edit_staff input").type("This is an edit test Doctor");
    cy.get("textarea").type("This is an edit test Doctor description");
    cy.contains("Submit").click();
    cy.location("pathname").should("eq", "/admin/staff");
  });

  it("Tests deleting of an existing staff member", function() {
    cy.contains("Delete").click();
    cy.location("pathname").should("eq", "/admin/staff");
  });
});
