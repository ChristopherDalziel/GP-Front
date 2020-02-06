describe("Admin Dashboard Vaccines CRUD Testing", function() {
  it("Logs into an admin account and relocates to the admin vaccines page", function() {
    cy.visit("localhost:3000");
    cy.contains(".navbtn", "Log In").click();
    cy.get("input[name=email]").type("klinikdrleong@gmail.com");
    cy.get("input[name=password").type("eb08ef45");
    cy.contains("Submit").click();
    cy.location("pathname").should("eq", "/");
    cy.get(".dropdown").trigger("mouseover");
    cy.get(".dropdown-content")
      .invoke("show")
      .contains("a", "Vaccines")
      .click();
    cy.location("pathname").should("eq", "/admin/vaccines");
  });

  it("Checks if an admin user is able to create a vaccine", function() {
    cy.get("input[name=brand]").type("Brand Test");
    cy.get("input[name=manufacturer]").type("Manufacturer Test");
    cy.get("input[name=description]").type("This is a vaccine create test");
    cy.contains("Submit").click();
    cy.location("pathname").should("eq", "/admin/vaccines");
    cy.contains("Brand Test");
    cy.contains("Manufacturer Test");
    cy.contains("This is a vaccine create test");
    cy.location("pathname").should("eq", "/admin/vaccines");
  });

  it("Negative Test: Checks error is display if service name field is not added", function() {
    cy.get("input[name=manufacturer]").type("Test Did Not Enter A Brand Name");
    cy.contains("Submit").click();
    cy.contains("is required");
  });

  it("Checks if an admin user is able to edit a vaccine", function() {
    cy.get("button[name=Button-Edit]")
      .last()
      .click();
    cy.get('[type="text"]').clear();
    cy.wait(500);
    cy.get("input[name=brand]").type("Brand Test");
    cy.get("input[name=manufacturer]").type("Manu Test");
    cy.wait(500);
    cy.get("input[name=description]").type("Desc Test");
    cy.contains("Submit").click();
    cy.wait(500);
    cy.location("pathname").should("eq", "/admin/vaccines");
  });

  it("Checks if an admin user is able to delete a vaccine", function() {
    cy.contains("button", "delete").click();
    cy.location("pathname").should("eq", "/admin/vaccines");
    cy.visit("localhost:3000");
    cy.wait(1000);
    cy.contains(".navbtn", "Logout").click();
    cy.location("pathname").should("eq", "/");
  });
});
