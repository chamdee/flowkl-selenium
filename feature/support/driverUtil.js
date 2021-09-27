const webdriver = require("selenium-webdriver")
const {Builder, Capabilities} = require('selenium-webdriver');
const caps = new Capabilities();
caps.setPageLoadStrategy("normal");
exports.initDriver = ()=>{
   // webdriver.setPageLoadStrategy('normal');
    driver = new webdriver.Builder()
    .withCapabilities(caps)
    .forBrowser("chrome")
    .build();
    return driver;
}
