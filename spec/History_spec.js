describe('mesbro homepage', function() {
    it('should greet the named user', async function() {
      // Load the mesbro login page homepage.
    await  browser.sleep(2000);
    await  browser.manage().window().setSize(1750, 1000);
     
    //Load Url
    await browser.driver.get('https://mesbro.com/idm/sign-in');    
    await browser.sleep(1000);

    browser.waitForAngularEnabled(false);
    browser.ignoreSynchronization=true  
    await  browser.sleep(2000);

//username & password
    function fullName(formControl, value, sleepTime) {
        describe("My username and password", function(){
            element(by.css(`input[formControlName=${formControl}]`)).sendKeys(value);
            browser.sleep(sleepTime);
        })    
    }
    fullName('username', 'sanju', 2000);
    fullName('password', '12345678S', 4000);
    await element(by.css('.bg-orange')).click();
    browser.sleep(3000);

    //Mesbro dashboard
await element(by.css('.link-button:nth-child(5)')).click();
await browser.sleep(2000);

//search product name in search field
await element(by.css('.all-apps-container .input-field-style')).sendKeys('Product');
await  browser.sleep(2000);

//Select product name
await element (by.css('.all-apps-icon-container:nth-child(2) .d-flex-center')).click() 
   await browser.sleep(10000);


       await element(by.css('.col-span-1 .display-flex .link-button:nth-child(4)')).click(); //saved products
       await browser.sleep(2000);

       await element(by.css('.display-grid .checkmark')).click(); //select checkbox
       await browser.sleep(2000);

    //    await element(by.css('.pd-25px .display-flex .container .checkmark')).click(); //select all checkbox 
    //    await browser.sleep(2000);

    //    await element(by.css('.pd-25px .display-flex .link-button')).click(); //selete all button
    //    await browser.sleep(2000);
    //    await element(by.css('.pd-25px .display-flex .link-button:nth-child(2)')).click(); //select  all button
    //    await browser.sleep(2000);


       await element(by.css('.display-grid .display-flex .width-16px')).click(); //compare icon
       await browser.sleep(2000);
       await element(by.css('.pd-25px .display-grid .display-flex .mg-r-20px:nth-child(3)')).click(); //shared product
       await browser.sleep(2000);
       await element(by.css('.pd-25px .display-grid .display-flex .link-button:nth-child(4)')).click(); //Delete product
       await browser.sleep(2000);
});
});