describe("Open Browser and Website", () => {
  it("passes", () => {
    cy.visit("https://www.saucedemo.com");
  });
});

describe("Search Query", () => {
  it("Finds the content login", () => {
    cy.visit("https://www.saucedemo.com");
    cy.contains("Login");
  });
});

describe("E2E Login standard_user", () => {
  it("Login with standard_user", () => {
    cy.visit("https://www.saucedemo.com");
    cy.wait(1000);
    cy.get("#user-name").type("standard_user");
    cy.wait(1000);
    cy.get("#password").type("secret_sauce");
    cy.wait(1000);
    cy.get("#login-button").click();
    cy.wait(1000);
  });
});

describe("Assertion", () => {
  it('Clicking "Login" navigates to a new url', () => {
    cy.visit("https://www.saucedemo.com/");
    cy.wait(1000);
    cy.get("#user-name").type("standard_user");
    cy.wait(1000);
    cy.get("#password").type("secret_sauce");
    cy.wait(1000);
    cy.contains("Login").click();
    cy.wait(1000);
    // Should be on a new URL which includes 'https://www.saucedemo.com/inventory.html'
    cy.url().should("include", "https://www.saucedemo.com/inventory.html");
  });
});

describe("E2E Login - Checkout", () => {
  it("Checkout Sauce Labs Backpack", () => {
    cy.visit("https://www.saucedemo.com/");
    cy.wait(1000);
    cy.get("#user-name").type("standard_user");
    cy.wait(1000);
    cy.get("#password").type("secret_sauce");
    cy.wait(1000);
    cy.contains("Login").click();
    cy.wait(1000);
    cy.get("#add-to-cart-sauce-labs-backpack").click();
    cy.wait(1000);
    cy.get(".shopping_cart_link").click();
    cy.wait(1000);
    cy.contains("Checkout").click();
    cy.wait(1000);
    cy.get("#first-name").type("Putu");
    cy.wait(1000);
    cy.get("#last-name").type("Raditha");
    cy.wait(1000);
    cy.get("#postal-code").type("55200");
    cy.wait(1000);
    cy.contains("Continue").click();
    cy.wait(1000);
    cy.contains("Finish").click();
    cy.wait(1000);
    cy.contains("Back Home").click();
    cy.wait(1000);
  });
});

describe("E2E Login - Logout", () => {
  it("Logout from sauce demo", () => {
    cy.visit("https://www.saucedemo.com/");
    cy.wait(1000);
    cy.get("#user-name").type("standard_user");
    cy.wait(1000);
    cy.get("#password").type("secret_sauce");
    cy.wait(1000);
    cy.contains("Login").click();
    cy.wait(1000);
    cy.get("#react-burger-menu-btn").click();
    cy.wait(1000);
    cy.contains("Logout").click();
    cy.wait(1000);
  });
});

describe("E2E Login locked_out_user", () => {
  it("Login with locked_out_user", () => {
    cy.visit("https://www.saucedemo.com");
    cy.wait(1000);
    cy.get("#user-name").type("locked_out_user");
    cy.wait(1000);
    cy.get("#password").type("secret_sauce");
    cy.wait(1000);
    cy.get("#login-button").click();
    cy.wait(1000);
    cy.contains("Epic sadface: Sorry, this user has been locked out.");
  });
});
