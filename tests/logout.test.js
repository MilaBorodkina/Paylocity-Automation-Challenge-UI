const { test, expect } = require("@playwright/test");
const { login } = require("../helpers/login");

test("Logout Test", async ({ page }) => {
  await login(page);
  //Click on "Log Out" button
  await page.click('a[href="/Prod/Account/LogOut"]');
  //Verify logout was successful
  await expect(page).toHaveURL(
    "https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod/Account/LogIn"
  );
  const Username = page.locator("#Username");
  await expect(Username).toBeVisible();
});
