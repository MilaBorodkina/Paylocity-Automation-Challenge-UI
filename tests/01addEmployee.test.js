const { test, expect } = require("@playwright/test");
const { login } = require("../helpers/login");

test("Add Employee Test", async ({ page }) => {
  await login(page);
  await page.waitForTimeout(2000);
  //Click on "Add Employee" button
  await page.click("#add");
  //Fill in the employee information
  await page.fill('input[name="firstName"]', "Jim");
  await page.fill('input[name="lastName"]', "Song");
  await page.fill('input[name="dependants"]', "3");
  //Click on "Add" button
  await page.click("#addEmployee");
  await page.waitForTimeout(2000);
  // Verify the first occurrence of the new employee is visible
  const newEmployee = page.locator("text=Jim").first();
  await expect(newEmployee).toBeVisible();
});
