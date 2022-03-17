/* eslint-disable no-undef */
describe("example breaking bad", () => {
  beforeEach(() => {
    cy.visit("localhost:3000");
  });

  it("Go to About", () => {
    cy.get("button").contains("About").click();
  });

  it("Upload users", () => {
    cy.get("button").contains("Upload").click();
    cy.get("button").contains("Submit").click();
    cy.get("button").contains("Export").click();
  });

  it("Delete user", () => {
    cy.get("button").contains("Upload").click();
    cy.get("button[id='5a6b008747ee8d7357263198']").contains("Delete").click();
  });

  it("Add empty row", () => {
    cy.get("button").contains("Upload").click();
    cy.get("button").contains("Add").click();
  });

  it("Edit user", () => {
    cy.get("button").contains("Upload").click();
    cy.get("button[id='5a6b008747ee8d7357263198']").contains("Edit").click();
    cy.get("input[id='5a6b008747ee8d7357263198lastName']")
      .type("sky")
      .type("{enter}");
  });

  it("Filter users", () => {
    cy.get("button").contains("Upload").click();
    cy.get("input[name='filter']").type("manager").type("{enter}");
  });

  it("Sort users", () => {
    cy.get("button").contains("Upload").click();
    cy.get("div[id='firstName']").click();
  });
});
