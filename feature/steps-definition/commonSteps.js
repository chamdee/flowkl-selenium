const {Given, When, Then, Before, After } = require("@cucumber/cucumber")
const { expect, assert } = require("chai")
const {initDriver} = require("../support/driverUtil")
const {By} = require("selenium-webdriver")
const {setDefaultTimeout} = require("@cucumber/cucumber")
setDefaultTimeout(80*1000);

let driver;
Before(function(){
    driver = initDriver()
});

After(function(){
    //driver.quit();
});

//Login001-Positive case: Valid ceredentials
Given('Login001 User access Flowkl homepage',  async () =>{
    await driver.get("http://serene-fjord-57767.herokuapp.com/");
    driver.manage().window().maximize();
});

When('Login001 User enter valid email', async () =>{
    await driver.findElement(By.xpath("/html/body/nav/div/div[2]/ul[2]/li[1]/a")).click();
    await driver.findElement(By.xpath("/html/body/div/div[1]/div/div/div[2]/div/div/div/div/div[2]/form/div[1]/div/input")).sendKeys("test000@test.com");
});

When('Login001 User enter valid password', async () =>{
    await driver.findElement(By.xpath("/html/body/div/div[1]/div/div/div[2]/div/div/div/div/div[2]/form/div[2]/div/input")).sendKeys("9g43xZLy___");
});

Then('Login001 Click login button', async () =>{
    await driver.findElement(By.xpath("/html/body/div/div[1]/div/div/div[2]/div/div/div/div/div[2]/form/div[4]/div/button")).click();
    driver.close();
});

//Login002-Negative case: Invalid ceredentials
Given('Login002 User access Flowkl homepage',{timeout: 90*1000}, async () => {
    await driver.get("http://serene-fjord-57767.herokuapp.com/");
    driver.manage().window().maximize();
});

When('Login002 User enter invalid email', async () => {
    await driver.findElement(By.xpath("/html/body/nav/div/div[2]/ul[2]/li[1]/a")).click();
    await driver.findElement(By.xpath("/html/body/div/div[1]/div/div/div[2]/div/div/div/div/div[2]/form/div[1]/div/input")).sendKeys("test000xx@test.com");
});

When('Login002 User enter invalid password', async () => {
    await driver.findElement(By.xpath("/html/body/div/div[1]/div/div/div[2]/div/div/div/div/div[2]/form/div[2]/div/input")).sendKeys("___");
});

When('Login002 Click login button', async () => {
    await driver.findElement(By.xpath("/html/body/div/div[1]/div/div/div[2]/div/div/div/div/div[2]/form/div[4]/div/button")).click();
});

Then('Login002 Unsuccessful Login', async () => {
    driver.findElement(By.name('These credentials do not match our records.')); //.getText();
    driver.close();
});

//Login003-Negative case: Incomplete ceredentials
Given('Login003 User access Flowkl homepage', async () => {
    await driver.get("http://serene-fjord-57767.herokuapp.com/");
    driver.manage().window().maximize();
});

When('Login003 User enter valid email', async () => {
    await driver.findElement(By.xpath("/html/body/nav/div/div[2]/ul[2]/li[1]/a")).click();
    await driver.findElement(By.xpath("/html/body/div/div[1]/div/div/div[2]/div/div/div/div/div[2]/form/div[1]/div/input")).sendKeys("test000@test.com");
});

When('Login003 Click login button', async () => {
    await driver.findElement(By.xpath("/html/body/div/div[1]/div/div/div[2]/div/div/div/div/div[2]/form/div[4]/div/button")).click();
});

Then('Login003 User unsuccessful login', async () => {
    driver.findElement(By.name('Please fill out this field.')); //.getText();
    driver.close();
});

//Login004-Negative case: No input
Given('Login004  User access Flowkl homepage', async () => {
    await driver.get("http://serene-fjord-57767.herokuapp.com/");
    driver.manage().window().maximize();
});

When('Login004 Go to Login Page',  async () => {
    await driver.findElement(By.xpath("/html/body/nav/div/div[2]/ul[2]/li[1]/a")).click();
});

When('Login004 Click login button',  async () => {
    await driver.findElement(By.xpath("/html/body/div/div[1]/div/div/div[2]/div/div/div/div/div[2]/form/div[4]/div/button")).click();
});

Then('Login004 User unsuccessful login', async () => {
    driver.findElement(By.name('Please fill out this field.')); //.getText();
    driver.close();
});

//Login005-Positive case: Remember ceredentials
Given('Login005 User access Flowkl homepage', async () =>{
    await driver.get("http://serene-fjord-57767.herokuapp.com/");
    driver.manage().window().maximize();
});

When('Login005 User enter valid email', async () => {
    await driver.findElement(By.xpath("/html/body/nav/div/div[2]/ul[2]/li[1]/a")).click();
    await driver.findElement(By.xpath("/html/body/div/div[1]/div/div/div[2]/div/div/div/div/div[2]/form/div[1]/div/input")).sendKeys("test000@test.com");
});

When('Login005 User enter valid password', async () => {
    await driver.findElement(By.xpath("/html/body/div/div[1]/div/div/div[2]/div/div/div/div/div[2]/form/div[2]/div/input")).sendKeys("9g43xZLy___");
});

When('Login005 Click Remember me', async () => {
    await driver.findElement(By.xpath("/html/body/div/div[1]/div/div/div[2]/div/div/div/div/div[2]/form/div[3]/div/div/input")).click();
});

When('Login005 Click login button', async () => {
    await driver.findElement(By.xpath("/html/body/div/div[1]/div/div/div[2]/div/div/div/div/div[2]/form/div[4]/div/button")).click();
});

When('Login005 Click logout button', async () => {
    await driver.findElement(By.xpath("/html/body/nav/div/div[2]/ul[2]/li/a")).click();
    await driver.findElement(By.xpath("/html/body/nav/div/div[2]/ul[2]/li/ul/li[4]/a")).click();
});

When('Login005 Open new window', async () => {
    await driver.switchTo().newWindow('window');
});

Then('Login005 User is navigated to homepage', async () => {
    await driver.get("http://serene-fjord-57767.herokuapp.com/");
   if (driver.getCurrentUrl() == "http://serene-fjord-57767.herokuapp.com/home"){
       result = true;
   }
   else{
        result = false;
   }
   expect(true).equals(result);
   driver.close();
});

//Login006-Positive case: Reset password
Given('Login006 User access Flowkl homepage', async () => {
    await driver.get("http://serene-fjord-57767.herokuapp.com/");
    driver.manage().window().maximize();
});

When('Login006 User enter valid email', async () => {
    await driver.findElement(By.xpath("/html/body/nav/div/div[2]/ul[2]/li[1]/a")).click();
    await driver.findElement(By.xpath("/html/body/div/div[1]/div/div/div[2]/div/div/div/div/div[2]/form/div[1]/div/input")).sendKeys("test000@test.com");
});

When('Login006 Click Forgot your password?', async () => {
    await driver.findElement(By.xpath("/html/body/div/div[1]/div/div/div[2]/div/div/div/div/div[2]/form/div[4]/div/a")).click();
});

When('Login006 User input valid email', async () => {
    await driver.findElement(By.xpath("/html/body/div/div[1]/div/div/div[2]/div/div/div/div/div[2]/form/div[1]/div/input")).sendKeys("test000@test.com");
});

When('Login006 Click Send password reset link', async () => {
    await driver.findElement(By.xpath("/html/body/div/div[1]/div/div/div[2]/div/div/div/div/div[2]/form/div[2]/div/button")).click();
});

Then('Login006 A success message must appear', async () => {
    driver.findElement(By.name("Success"));
    driver.close();
});

//Login007-Negative case: Reset password
Given('Login007 User access Flowkl homepage', async () => {
    await driver.get("http://serene-fjord-57767.herokuapp.com/");
    driver.manage().window().maximize();
});

When('Login007 Click Login button', async () => {
    await driver.findElement(By.xpath("/html/body/nav/div/div[2]/ul[2]/li[1]/a")).click();
});

When('Login007 Click Forgot your password?', async () => {
    await driver.findElement(By.xpath("/html/body/div/div[1]/div/div/div[2]/div/div/div/div/div[2]/form/div[4]/div/a")).click();
});

When('Login007 User input invalid email', async () => {
    await driver.findElement(By.xpath("/html/body/div/div[1]/div/div/div[2]/div/div/div/div/div[2]/form/div[1]/div/input")).sendKeys("test000xxxxx@test.com");

});

Then('Login007 Error message must appear', async () => {
    driver.findElement(By.name("We can't find a user with that email address"));
    driver.close();
});

//Logout001-Positive case
  Given('Logout001 User access Flowkl homepage', async () => {
    await driver.get("http://serene-fjord-57767.herokuapp.com/");
    driver.manage().window().maximize()
  });

  When('Logout001 User enter valid email', async () => {
    await driver.findElement(By.xpath("/html/body/nav/div/div[2]/ul[2]/li[1]/a")).click();
    await driver.findElement(By.xpath("/html/body/div/div[1]/div/div/div[2]/div/div/div/div/div[2]/form/div[1]/div/input")).sendKeys("test000@test.com");

  });

  When('Logout001 User enter valid password', async () => {
    await driver.findElement(By.xpath("/html/body/div/div[1]/div/div/div[2]/div/div/div/div/div[2]/form/div[2]/div/input")).sendKeys("9g43xZLy___");

  });

  When('Logout001 Click login button', async () => {
    await driver.findElement(By.xpath("/html/body/div/div[1]/div/div/div[2]/div/div/div/div/div[2]/form/div[4]/div/button")).click();
  });

  Then('Logout001 Click logout', async () =>  {
    await driver.findElement(By.xpath("/html/body/nav/div/div[2]/ul[2]/li/a")).click();
    await driver.findElement(By.xpath("/html/body/nav/div/div[2]/ul[2]/li/ul/li[4]/a")).click();
    driver.close();
  });