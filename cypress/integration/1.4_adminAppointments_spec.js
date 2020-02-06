describe("Admin Dashboard Appointment Functionality", function() {
  it("Tests login of an existing admin account and accesses the appointment page", function() {
    cy.visit("localhost:3000");
    cy.contains(".navbtn", "Log In").click();
    cy.get("input[name=email]").type("klinikdrleong@gmail.com");
    cy.get("input[name=password").type("eb08ef45");
    cy.contains("Submit").click();
    cy.location("pathname").should("eq", "/");
    cy.get(".dropdown").trigger("mouseover");
    cy.get(".dropdown-content")
      .invoke("show")
      .contains("a", "Appointments")
      .click();
    cy.location("pathname").should("eq", "/admin/appointments");
  });

  it("Tests canceling an appointment", function() {
    cy.contains("button", "Cancel").click();
    cy.location("pathname").should("eq", "/admin/appointments");
    cy.contains(".navbtn", "Logout").click();
    cy.location("pathname").should("eq", "/");
  });
});
