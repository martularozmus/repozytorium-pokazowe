describe("Login Test", () => {
    it("Visits the login page and logs in", () => {
      cy.visit("https://thinking-tester-contact-list.herokuapp.com");
      cy.get("input[id=email]").type("martamentee@test.com");
      cy.get("input[id=password]").type("Test11!!");
      cy.get("form").submit();
      cy.get("button[id=logout]").should("be.visible");
      cy.get("button[id=add-contact]").should("be.visible");
    });
    it("Another login", () => {
      cy.visit("https://thinking-tester-contact-list.herokuapp.com");
      cy.get("input[id=email]").type("martularozmus@gmail.com");
      cy.get("input[id=password]").type("G@corek123");
      cy.get("form").submit();
      cy.get("button[id=logout]").should("be.visible");
      cy.get("button[id=add-contact]").should("be.visible");
    });
    afterEach(() => {
      cy.get("button[id=logout]").click();
    });
  });