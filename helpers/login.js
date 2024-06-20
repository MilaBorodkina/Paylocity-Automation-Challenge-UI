const { expect } = require("@playwright/test");

async function login(page) {
  await page.goto(
    "https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod/Account/Login"
  );
  await page.waitForSelector("#Username", { timeout: 10000 });
  await page.fill("#Username", "TestUser387");
  await page.fill("#Password", "[=)52=K@l1=r");
  await page.click('button[type="submit"]');
}

module.exports = { login };
