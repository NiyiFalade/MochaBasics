const {Builder, By, until} = require('selenium-webdriver');

(async function example() {
    const driver = await new Builder().forBrowser('chrome').build();

    try {
        await driver.get('https://www.google.com');
        await driver.findElement(By.name('q')).sendKeys('nehalist');
        await driver.findElement(By.id('tsf')).submit();
        await driver.wait(until.elementLocated(By.id('search')));
        await driver.sleep(5000);
        await driver.findElement(By.linkText('nehalist.io')).click();
        await driver.wait(until.titleIs('nehalist.io'));
        }
        catch(error){
            console.log('Error caught ' + error);   
     } finally {
        await driver.quit();
    }
})();