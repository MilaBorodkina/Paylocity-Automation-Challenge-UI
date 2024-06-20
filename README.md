# Paylocity Automation Challenge

This project contains automated tests for verifying the functionality of the Paylocity web application using Playwright on JavaScript.

## Requirements:

Before you begin, ensure you have met the following requirements:

- Node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org/)

## Getting Started:

Clone the repository:

```
git clone https://github.com/MilaBorodkina/Paylocity-Automation-Challenge-UI
```

Install dependencies:

```
npm install
```

Install Playwright:

```
npx playwright install
```

Configure Your Credentials:

You can update the login credentials in the test script helpers\login.js and tests\login.test.js with your username and password:

```js
await page.fill('input[name="Username"]', "your-username"); // Replace with your username
await page.fill('input[name="Password"]', "your-password"); // Replace with your password
```

## Run the Tests:

Execute the tests using the Playwright test runner:

```
npx playwright test
```

These tests are designed to run sequentially, so running them in serial mode is recommended. To achieve this, you need to ensure that the fullyParallel function is turned off in your Playwright configuration file.

### Test Details:

• **Login:** Navigates to the login page and logs in with provided credentials

• **Log Out:** Logs out and verifies the redirection to the login page

• **Add Employee:** Adds a new employee and verifies its presence in the table

• **Edit Employee:** Edits the newly added employee and verifies the changes

• **Delete Employee:** Deletes the edited employee and verifies its removal

## Project Structure:

```bash
.
├── helpers/                # Directory with the login module
├── node_modules/           # Project dependencies
├── playwright-report/      # Playwright report
├── test-results/           # Test results
├── tests/                  # Directory with the test scripts
├── .gitignore
├── package.json            # Project metadata and dependencies
└── playwright.config.js    # Playwright configuration file
```
