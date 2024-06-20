const { test, expect } = require("@playwright/test");
const { login } = require("../helpers/login");

test("Delete Employee Test", async ({ page }) => {
  await login(page);
  await page.waitForTimeout(2000);
  //Check if the employee is in the table
  const employee = page
    .locator('table#employeesTable tr:has-text("Jack")')
    .first();
  //Click on Delete icon
  await employee.locator("i.fa-times").click();
  //Click on "Delete" button
  await page.click("#deleteEmployee");
  await page.waitForTimeout(2000);
  //Check if employee is deleted
  await expect(employee).not.toBeVisible();
});
