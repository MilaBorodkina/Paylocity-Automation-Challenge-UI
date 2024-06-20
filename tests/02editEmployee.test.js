const { test, expect } = require("@playwright/test");
const { login } = require("../helpers/login");

test("Edit Employee Test", async ({ page }) => {
  await login(page);
  await page.waitForTimeout(2000);
  //Check if the employee is in the table
  const employee = page
    .locator('table#employeesTable tr:has-text("Jim")')
    .first();
  if (await employee.isVisible({ timeout: 2000 })) {
    //Click in Edit icon
    await employee.locator("i.fa-edit").first().click();
    //Fill in the employee information
    await page.fill('input[name="firstName"]', "Jack");
    await page.fill('input[name="lastName"]', "Pong");
    await page.fill('input[name="dependants"]', "6");
    //Click on "Update" button
    await page.click("#updateEmployee");
    await page.waitForTimeout(2000);
    //Verify the first occurrence of the edited employee is visible
    const updatedEmployee = page.locator("text=Jack").first();
    await expect(updatedEmployee).toBeVisible();
  }
});
