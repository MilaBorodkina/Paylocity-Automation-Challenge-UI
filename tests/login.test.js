const { test, expect } = require("@playwright/test");

test("Login Test", async ({ page }) => {
  //Navigate to the login page
  await page.goto(
    "https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod/Account/LogIn"
  );
  //Fill in the login form
  await page.fill('input[name="Username"]', "TestUser387");
  await page.fill('input[name="Password"]', "[=)52=K@l1=r");
  //Submit the form
  await page.click('button[type="submit"]');
  //Verify login was successful
  await expect(page).toHaveURL(
    "https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod/Benefits"
  );
  const employeesTable = page.locator("#employeesTable");
  await expect(employeesTable).toBeVisible();
});
