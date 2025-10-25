# Selenium_demo

Selenium is a browser automation library. Most often used for testing web-applications, Selenium may be used for any task that requires automating interaction with the browser.

The follwing are the steps followed while learning the basics of Selenium:

1. run `npm init` to create _package.json_
2. run `npm i selenium-webdriver` to install _Selenium_
3. You will need to download additional components to work with each of the major browsers. The _drivers_ for Chrome, Firefox, and Microsoft's IE and Edge web browsers are all standalone executables that should be placed on your system _PATH_. To enable automation on safari, you need to run command `safaridriver --enable`
4. - Open Safari → Preferences (or Settings) → Advanced and enable "Show Develop menu in menu bar".

     - From the menu bar choose Develop → enable "Allow Remote Automation".
     - Quit and reopen Safari to apply the change.
     - If you still get the same error, open Terminal and run:
       `sudo safaridriver --enable`  
       (enter your macOS password when prompted).
     - If it still fails, check System Settings → Privacy & Security → Automation or Accessibility and allow Terminal or your Node runtime to control Safari.
     - Run your script again: `node index.js` — Safari should now be controllable via WebDriver.

     ***

     ##1. **_Test 1_**
     | **Line** | **Code** | **Meaning / Why** |
     |-----------|-----------|------------------|
     | 1 | `const { Builder } = require('selenium-webdriver');` | Imports the Selenium WebDriver module so we can control browsers from JavaScript. |
     | 3 | `(async function openBrowser() { ... })();` | Creates an asynchronous function and executes it immediately. Selenium commands return promises, so we need async/await to handle them properly. |
     | 5 | `let driver = await new Builder().forBrowser('safari').build();` | Creates a new browser instance (Safari in this case). `driver` is the object we use to control the browser. |
     | 8 | `await driver.get('https://www.google.com');` | Navigates the browser to a specific URL. This is like typing the address in Safari’s address bar. |
     | 11 | `await driver.sleep(3000);` | Pauses the script for 3 seconds. This is just so you can visually see the page open. |
     | 13 | `console.log("Website opened successfully!");` | Prints a message in the terminal to show the script ran successfully. |
     | 15-17 | `catch (error) { ... }` | Handles any errors in the script, so the program doesn’t crash. |
     | 18 | `await driver.quit();` | Closes the browser completely and ends the session. Very important to free system resources. |
