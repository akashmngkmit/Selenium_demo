// 1️⃣ Import the Selenium WebDriver module
const { Builder } = require('selenium-webdriver');

(async function openBrowser() {
  // 2️⃣ Build a new driver for Safari
  let driver = await new Builder().forBrowser('safari').build();

  try {
    // 3️⃣ Navigate to a website (here: Google)
    await driver.get('https://www.google.com');

    // 4️⃣ Wait for 3 seconds so we can see the page
    await driver.sleep(3000);

    console.log("Website opened successfully!");
  } catch (error) {
    console.error("Something went wrong:", error);
  } finally {
    // 5️⃣ Close the browser
    await driver.quit();
  }
})();
