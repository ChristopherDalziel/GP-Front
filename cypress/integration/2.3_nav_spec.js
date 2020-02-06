describe("Nav Functionality Testing", function() {
  it("Clicks all links in the nav bar", function() {
    cy.visit("localhost:3000");
    cy.contains(".one", "Home").click();
    cy.contains(".navbtn", "About Us").click();
    cy.location("pathname").should("eq", "/about");
    cy.contains("Our Doctors");
    cy.contains(".navbtn", "Services").click();
    cy.location("pathname").should("eq", "/services");
    cy.contains(".navbtn", "Book Now").click();
    cy.location("pathname").should("eq", "/booking");
    cy.contains(".navbtn", "Contact Us").click();
    cy.location("pathname").should("eq", "/contact");
  });

  it("Logs into an admin account to test the admin nav buttons", function() {
    cy.contains(".navbtn", "Log In").click();
    cy.get("input[name=email]").type("klinikdrleong@gmail.com");
    cy.get("input[name=password").type("eb08ef45");
    cy.contains("Submit").click();
  });

  it("Clicks all admin nav buttons", function() {
    cy.get(".dropdown").trigger("mouseover");
    cy.get(".dropdown-content")
      .invoke("show")
      .contains("a", "Users")
      .click();

    cy.location("pathname").should("eq", "/admin/users");

    cy.get(".dropdown").trigger("mouseover");
    cy.get(".dropdown-content")
      .invoke("show")
      .contains("a", "Appointments")
      .click();
    cy.wait(500);
    cy.location("pathname").should("eq", "/admin/appointments");

    cy.get(".dropdown").trigger("mouseover");
    cy.get(".dropdown-content")
      .invoke("show")
      .contains("a", "Staff")
      .click();
    // cy.location("pathname").should("eq", "/admin/staff");

    cy.get(".dropdown").trigger("mouseover");
    cy.get(".dropdown-content")
      .invoke("show")
      .contains("a", "Services")
      .click();
    cy.location("pathname").should("eq", "/admin/services");

    cy.get(".dropdown").trigger("mouseover");
    cy.get(".dropdown-content")
      .invoke("show")
      .contains("a", "Vaccines")
      .click();
    cy.location("pathname").should("eq", "/admin/vaccines");

    cy.get(".dropdown").trigger("mouseover");
    cy.get(".dropdown-content")
      .invoke("show")
      .contains("a", "Klinik Hours")
      .click();
    cy.location("pathname").should("eq", "/admin/opening-hours");

    cy.contains(".one", "Home").click();
    cy.location("pathname").should("eq", "/");
    cy.visit("localhost:3000");
    cy.wait(1000);
    cy.contains(".navbtn", "Logout").click();
  });

  it("Logs into a patient/standard user account to check logged in nav buttons", function() {
    cy.contains(".navbtn", "Log In").click();
    cy.get("input[name=email]").type("cypresstestprofileupdate@test.com");
    cy.get("input[name=password").type("testcypress");
    cy.contains("Submit").click();
    cy.location("pathname").should("eq", "/");
    cy.contains(".navbtn", "Profile").click();
    cy.location("pathname").should("eq", "/profile");
    cy.visit("localhost:3000");
    cy.wait(1000);
    cy.contains(".navbtn", "Logout").click();
    cy.location("pathname").should("eq", "/");
  });
});
