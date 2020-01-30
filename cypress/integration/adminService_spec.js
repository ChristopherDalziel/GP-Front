

describe("Admin Vaccines CRUD Testing", function() {
  it("Logs into an admin account and relocates to the admin services page", function() {
    cy.visit("localhost:3000");
    cy.contains("li", "Log In").click();
    cy.get("input[name=email]").type("klinikdrleong@gmail.com");
    cy.get("input[name=password]").type("eb08ef45");
    cy.contains("Submit").click();
    cy.location("pathname").should("eq","/")
    cy.contains("li", "Admin Services").click();
    cy.location("pathname").should("eq","/admin/services")
  });

  it("Checks if an admin user is able to create a service", function() {
    cy.get("input[name=serviceName]").type("this is a test");
    cy.get("input[name=serviceDescription]").type("this is a test description");
    cy.contains("Submit").click();
    cy.location("pathname").should("eq","/admin/services")
    cy.contains("this is a test")
    cy.contains("this is a test description")
    cy.location("pathname").should("eq", "/admin/services");
  });

  it("Checks if an admin user is able to edit a service", function() {
    cy.get("button[name=editService]")
      .last()
      .click();
    cy.get('[type="text"]').clear();
    cy.get("input[name=serviceName]").type("this is anothe555");
    cy.get("input[name=serviceDescription]").type("this is another description222");
    cy.contains("Submit").click();
    cy.location("pathname").should("eq", "/admin/services");
  });

  it("Checks if an admin user is able to edit a service", function() {
    cy.contains("Delete").last.click();
    cy.location("pathname").should("eq", "/admin/services");
  });

});