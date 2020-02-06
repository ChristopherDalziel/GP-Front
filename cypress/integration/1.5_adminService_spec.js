describe("Admin Vaccines CRUD Testing", function() {
  it("Logs into an admin account and accesses to the admin services page", function() {
    cy.visit("localhost:3000");
    cy.contains(".navbtn", "Log In").click();
    cy.get("input[name=email]").type("klinikdrleong@gmail.com");
    cy.get("input[name=password]").type("eb08ef45");
    cy.contains("Submit").click();
    cy.location("pathname").should("eq", "/");
    cy.get(".dropdown").trigger("mouseover");
    cy.get(".dropdown-content")
      .invoke("show")
      .contains("a", "Services")
      .click();
    cy.location("pathname").should("eq", "/admin/services");
  });

  it("Checks if an admin user is able to create a service", function() {
    cy.get("input[name=serviceName]").type("this is a test");
    cy.get("input[name=serviceDescription]").type("this is a test description");
    cy.contains("Submit").click();
    cy.location("pathname").should("eq", "/admin/services");
    cy.contains("this is a test");
    cy.contains("this is a test description");
    cy.location("pathname").should("eq", "/admin/services");
  });

  it("Negative Test: Checks error is display if service name field is not added", function() {
    cy.get("input[name=serviceDescription]").type(
      "Test Did Not Enter A Service Name"
    );
    cy.contains("Submit").click();
    cy.contains("is required");
  });

  it("Checks if an admin user is able to edit a service", function() {
    cy.get("button[name=editService]")
      .last()
      .click();
    cy.get('[type="text"]').clear();
    cy.get("input[name=serviceName]").type("Service Name Editing Test");
    cy.get("input[name=serviceDescription]").type(
      "Service Description Editing Test"
    );
    cy.contains("Submit").click();
    cy.location("pathname").should("eq", "/admin/services");
  });

  it("Checks if an admin user is able to delete a service", function() {
    cy.contains("button", "delete").click();
    cy.location("pathname").should("eq", "/admin/services");
    cy.contains(".navbtn", "Logout").click();
    cy.wait(500);
    cy.location("pathname").should("eq", "/");
  });
});
