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

          
//   trending products
await element(by.css('.business__productCard--container')).click();
await browser.sleep(4000);

function like(waitTime, child){
        describe("redirect to scrap",function(){
            element(by.css(`.col-span-1:nth-child(2) .display-flex .link-button:nth-child(${child})`)).click();
            browser.sleep(waitTime);
        })
        }
        like(9000,1); // Click on the Like Button
        like(9000,2); // Click on the DisLike Button   
        like(9000,3); // Click on the Compare Button
        like(9000,4); // Click on the Saved Product Button
        like(9000,5); // Click on the Print Button
        like(9000,6); // Click on the QR code Button
        like(9000,7); // Click on the Share Button
// // Share
             function redTo(waitTime, child){
                describe("redirect to social media",function(){
                     element(by.css(`.sb-group .sb-button:nth-child(${child}) .sb-wrapper`)).click();
                    browser.sleep(waitTime);     
                })
            }
              redTo(8000,1);
            //   redTo(8000,2);
            //   redTo(8000,3);

            // browser.navigate().back();
            // browser.sleep(4000);

    //Contact supplier
   await element(by.css('.display-flex .col-span-1')).click(); //call
   await browser.sleep(4000);
   await element(by.css('.display-flex .col-span-1:nth-child(2)')).click(); //chat
   await browser.sleep(4000);
  
   
   await element(by.css('.display-flex .col-span-1:nth-child(3)')).click(); //mail
   await browser.sleep(4000);
   browser.navigate().back();
   browser.sleep(4000);
     // organization review
 
   //  rate and review field
   function rate(rating, value, sleepTime) {
    describe("rating product", function(){
        element(by.css(`${rating}`)).sendKeys(value);
        browser.sleep(sleepTime);
    })   
}
rate('.generic-profile-info-container .comment-container .comment-textarea .fs-13px', 'nice', 7000);


    function review(ratereview, sleepTime){
            describe("review button",function(){
                element(by.css(`${ratereview}`)).click();
                browser.sleep(sleepTime);
            })
            }
            review('.comment-bttn .bttn-flat',5000); 

 // enquiry 

        function enquiry(formControl, value, sleepTime) {
            describe("send enquiry", function(){
                element(by.css(`input[formControlName=${formControl}]`)).sendKeys(value);
                browser.sleep(sleepTime);
            })    
        }
        enquiry('name', 'manwa', 6000);
        enquiry('phoneNo', '12345678', 2000);
        enquiry('email', 'manwa@mesbro.com', 2000); 
        enquiry('enquirySubject', 'hbhjbjb', 2000);
        enquiry('requiredQty', '100', 2000);
        enquiry('unit','gram', 2000);
        
        function titleDescription(formControl, value, sleepTime) {
            describe("enquiry description", function(){
                element(by.css(`textarea[formControlName=${formControl}]`)).sendKeys(value);
                browser.sleep(sleepTime);
            })    
        }
        titleDescription('description', 'jknnckjnk', 5000);

            function interested(button, sleepTime){
                    describe("i'm interested button",function(){
                        element(by.css(`${button}`)).click();
                        browser.sleep(sleepTime);
                    })
                    }
                    interested('.display-grid .center-text .bttn-medium',5000);

                    // await element(by.css('.ng-touched')).click();
                    //     await browser.sleep(2000);

        // //   Add details page rate and review field 
          function rate(rating, value, sleepTime) {
            describe("rating product", function(){
                element(by.css(`${rating}`)).sendKeys(value);
                browser.sleep(sleepTime);
            })    
        }
        rate('.col-span-1:nth-child(2) .comment .comment-textarea .fs-13px', 'nice', 7000);
        
        function review(ratereview, sleepTime){
            describe("mesbro application icon",function(){
                element(by.css(`${ratereview}`)).click();
                browser.sleep(sleepTime);
            })
            }
            review('.col-span-1:nth-child(2) .comment-bttn .bttn-flat',5000);

       

        // Did this product Product help you ?
        // Click Yes thanks button
        await element(by.css('.feedback-bttn-container .bttn-warm')).click();
        await browser.sleep(3000);
      
    // Click on the description field
    await element(by.css('.ng-invalid .text-area-style')).sendKeys('czckjnzcknkjn');
    await browser.sleep(2000);

    // Can we post on the story on this article to inspire readers
    function optionSelect(formControl, sleepTime) {
                                    describe("select option", function(){
                                        element(by.css(`ng-select[formcontrolname=${formControl}]`)).click();
                                        browser.sleep(sleepTime);
                                    })    
                                }
                                optionSelect('opinion', 3000);
        
                               function dropdown(waitTime, child){
                                        describe("dropdownvalue",function(){
                                             element(by.css(`.ng-dropdown-panel-items .ng-option:nth-child(${child})`)).click();
                                            browser.sleep(waitTime);     
                                        })
                                    }
                                    dropdown(3000,1);

                                    function submit(submitbutton, sleepTime){
                                        describe("did this product",function(){
                                             element(by.css(`${submitbutton}`)).click();
                                                browser.sleep(sleepTime);
                                                            })
                                                        }
                                                        submit('.generic-card-body  .right-text .f-13', 2000);
                                
                            
                            // No thanks button
        
                            await element(by.css('.feedback-bttn-container .bttn-flat')).click();
                            await browser.sleep(3000);

                            // Report product button 

                            await element(by.css('.feedback-bttn-container .bg-dark-red')).click();
                            await browser.sleep(3000);
                            await element(by.css('.report-text-area ')).sendKeys('jkbcbjhb');
                            await browser.sleep(2000);
                            element(by.css('.generic-card-body .right-text .clr-light-white')).click();
                            browser.sleep(3000);
                         
               //more for seller
      await element(by.css('.business__productCard--container')).click();
      await browser.sleep(4000);
     
      browser.navigate().back();
      browser.sleep(4000);
      await element(by.css('.business__productCard--container .link-button')).click();
      await browser.sleep(4000) 

//         //Contact supplier
//    await element(by.css('.display-flex .col-span-1')).click(); //call
//    await browser.sleep(4000);
//    await element(by.css('.display-flex .col-span-1:nth-child(2)')).click(); //chat
//    await browser.sleep(4000);
   
//    await element(by.css('.display-flex .col-span-1:nth-child(3)')).click(); //mail
//    await browser.sleep(4000);
                    
//             // organization review
 
//    //  rate and review field
//          function rate(rating, value, sleepTime) {
//            describe("rating product", function(){
//                element(by.css(`${rating}`)).sendKeys(value);
//                browser.sleep(sleepTime);
//            })   
//        }
//        rate('.generic-profile-info-container .comment-container .comment-textarea .fs-13px', 'nice', 7000);
      
 
//            function review(ratereview, sleepTime){
//                    describe("review button",function(){
//                        element(by.css(`${ratereview}`)).click();
//                        browser.sleep(sleepTime);
//                    })
//                    }
//                    review('.comment-bttn .bttn-flat',5000);         

                       





});
});