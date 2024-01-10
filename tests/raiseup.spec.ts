import { test, expect } from "@playwright/test";

test("Verify logo is visible", async ({ page }) => {
  //test steps

  await page.goto("https://explore.hubtel.com/schools/");
  const logo = page.locator('[href="https://hubtel.com"]');
  //await expect(logo).toBeVisible();
});

test("Open home page and verify title", async ({ page }) => {
  //test steps

  await page.goto("https://explore.hubtel.com/schools/");

  await expect(page).toHaveTitle("RaiseUp for Schools - Hubtel");
});

test("Verify header image is visible", async ({ page }) => {
  //test steps

  await page.goto("https://explore.hubtel.com/schools/");

  const imageSelector =
    'img[src="https://explore.hubtel.com/wp-content/themes/explorehubtel/images/schools-app.png"]';

  await page.waitForSelector(imageSelector);
});

test("Verify image1 is visible", async ({ page }) => {
  //test steps

  await page.goto("https://explore.hubtel.com/schools/");

  const imageSelector =
    'img[src="https://explore.hubtel.com/wp-content/themes/explorehubtel/images/share-image.png"]';

  await page.waitForSelector(imageSelector);
});

test("Verify image2 is visible", async ({ page }) => {
  //test steps

  await page.goto("https://explore.hubtel.com/schools/");

  const imageSelector =
    'img[src="https://explore.hubtel.com/wp-content/themes/explorehubtel/images/schools-app.png"]';

  await page.waitForSelector(imageSelector);
});

test("Verify image3 is visible", async ({ page }) => {
  //test steps

  await page.goto("https://explore.hubtel.com/schools/");

  const imageSelector =
    'img[src="https://explore.hubtel.com/wp-content/themes/explorehubtel/images/manage-pickups.png"]';

  await page.waitForSelector(imageSelector);
});

test("Verify image4 is visible", async ({ page }) => {
  //test steps

  await page.goto("https://explore.hubtel.com/schools/");

  const imageSelector =
    'img[src="https://explore.hubtel.com/wp-content/themes/explorehubtel/images/pay-school-fees.png"]';

  await page.waitForSelector(imageSelector);
});

test("Verify image5 is visible", async ({ page }) => {
  //test steps

  await page.goto("https://explore.hubtel.com/schools/");

  const imageSelector =
    'img[src="https://explore.hubtel.com/wp-content/themes/explorehubtel/images/manage-permissions.png"]';

  await page.waitForSelector(imageSelector);
});

test("Verify image6 is visible", async ({ page }) => {
  //test steps

  await page.goto("https://explore.hubtel.com/schools/");

  const imageSelector =
    'img[src="https://explore.hubtel.com/wp-content/themes/explorehubtel/images/bring-family-together.png"]';

  await page.waitForSelector(imageSelector);
});

test("Verify Install RaiseUp Button", async ({ page }) => {
  //test steps

  await page.goto("https://explore.hubtel.com/schools/");

  // Interact with the button that triggers navigation
  const anchorSelector = 'a[href="https://a.hbtl.co/schools/"]';
  await page.waitForSelector(anchorSelector);

  // Verify the navigation link on the new page
  const expectedNavLink = "https://a.hbtl.co/schools/";
  const currentUrl = page.url();

  if (currentUrl === expectedNavLink) {
    console.log("Navigation link is correct:", currentUrl);
  } else {
    console.error(
      "Navigation link is incorrect. Expected:",
      expectedNavLink,
      "Actual:",
      currentUrl
    );
  }
});

test("Verify Child School SignUp Button", async ({ page }) => {
  //test steps

  await page.goto("https://explore.hubtel.com/schools/");

  // Interact with the button that triggers navigation
  const anchorSelector = 'a[href="https://a.hbtl.co/schools/"]';
  await page.waitForSelector(anchorSelector);

  // Verify the navigation link on the new page
  const expectedNavLink = "https://raiseup.hubtel.com/signup";
  const currentUrl = page.url();

  if (currentUrl === expectedNavLink) {
    console.log("Navigation link is correct:", currentUrl);
  } else {
    console.error(
      "Navigation link is incorrect. Expected:",
      expectedNavLink,
      "Actual:",
      currentUrl
    );
  }
});

test("Verify text of navigation menu links", async ({ page }) => {
  const expectedLinks = [];

  await page.goto("https://raiseup.hubtel.com/signup");

  //await page.pause();
  const navLinks = page.locator("#nav-tab");

  expect(await navLinks.allInnerTexts()).toEqual(expectedLinks);
});

test("Verify SignUp School Button", async ({ page }) => {
  //test steps

  await page.goto("https://explore.hubtel.com/schools/");

  // Interact with the button that triggers navigation
  const anchorSelector = 'a[href="https://raiseup.hubtel.com/signup"]';
  await page.waitForSelector(anchorSelector);

  // Verify the navigation link on the new page
  const expectedNavLink = "https://raiseup.hubtel.com/signup";
  const currentUrl = page.url();

  if (currentUrl === expectedNavLink) {
    console.log("Navigation link is correct:", currentUrl);
  } else {
    console.error(
      "Navigation link is incorrect. Expected:",
      expectedNavLink,
      "Actual:",
      currentUrl
    );
  }
});

test("Verify Get Started Now Button", async ({ page }) => {
  //test steps

  await page.goto("https://explore.hubtel.com/schools/");

  // Interact with the button that triggers navigation
  const anchorSelector = 'a[href="https://raiseup.hubtel.com/login"]';
  await page.waitForSelector(anchorSelector);

  // Verify the navigation link on the new page
  const expectedNavLink = "https://raiseup.hubtel.com/login";
  const currentUrl = page.url();

  if (currentUrl === expectedNavLink) {
    console.log("Navigation link is correct:", currentUrl);
  } else {
    console.error(
      "Navigation link is incorrect. Expected:",
      expectedNavLink,
      "Actual:",
      currentUrl
    );
  }
});
