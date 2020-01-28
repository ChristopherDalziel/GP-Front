describe("Admin Functionality Testing", function() {
  it("Tests each admin component", function() {
    cy.visit("localhost:3000");

    // Logging into an Admin Account for more testing
    cy.contains("li", "Log In").click();
    cy.get("input[name=email]").type("klinikdrleong@gmail.com");
    cy.get("input[name=password").type("eb08ef45");
    cy.contains("Submit").click();
    cy.location("pathname").should("eq", "/");
    cy.contains("li", "Admin Dashboard").click();
    cy.location("pathname").should("eq", "/admin/staff");

    cy.contains("Add New Staff Member").click();
    cy.location("pathname").should("eq", "/admin/add_staff");
    cy.get("input[name=add_staff]").type("THIS IS A TEST DOCTOR");
    cy.get("textarea").type("THIS IS A TEST DOCTOR THEY AREN'T VERY EXCITING");
    cy.contains("Submit").click();
    cy.location("pathname").should("eq", "/admin/staff");
  });
});
