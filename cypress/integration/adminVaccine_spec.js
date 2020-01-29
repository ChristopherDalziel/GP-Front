describe("Admin Vaccines CRUD Testing", function() {
  it("Logs into an admin account and relocates to the admin vaccines page", function() {
    cy.visit("localhost:3000");
    cy.contains("li", "Log In").click();
    cy.get("input[name=email]").type("klinikdrleong@gmail.com");
    cy.get("input[name=password").type("eb08ef45");
    cy.contains("Submit").click();
    cy.location("pathname").should("eq", "/");
    cy.contains("li", "Admin Vaccines").click();
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
  });

  it("Checks if an admin user is able to edit a vaccine", function() {
    cy.get("button[name=Button-Edit]")
      .last()
      .click();
    cy.get('[type="text"]').clear();
    cy.get("input[name=brand]").type("Brand Test");
    cy.get("input[name=manufacturer]").type("Manufacturer Test");
    cy.g;
  });
});
