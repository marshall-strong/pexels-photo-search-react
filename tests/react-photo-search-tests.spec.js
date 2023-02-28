const { test, expect } = require("@playwright/test");

// run tests in headful mode so you can see the browser
test.use({ headless: false, slowMo: 1000 });

test("React Photo Search title is visible", async ({ page }) => {
  // go to homepage
  await page.goto("https://pexels-photo-search-react.netlify.app/");

  // assert page title appears
  await expect(page.getByText("React Photo Search")).toBeVisible();
});
