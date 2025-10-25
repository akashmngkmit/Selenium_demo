const { Builder, By, Key } = require('selenium-webdriver');

(async function searchGoogle() {
  let driver = await new Builder().forBrowser('safari').build();

  try {
    await driver.get('https://www.google.com');

    // Locate the search bar using its name attribute
    let searchBox = await driver.findElement(By.name('q'));

    // Type a search query and press Enter
    await searchBox.sendKeys('Selenium WebDriver', Key.RETURN);

    await driver.sleep(10000);
  } finally {
    await driver.quit();
  }
})();
