describe('Mesbro Homepage', function() {
    it('Mesbro homepage launch', async function(done) {
          console.log('hello');      
   
          browser.waitForAngularEnabled(false);
          browser.ignoreSynchronization= true
          browser.sleep(2000);
          browser.manage().window().maximize()
  
  
 //Launching mesbro homepage
    browser.get("https://mesbro.com/idm/sign-in");
    await browser.sleep(4000);
  
  
 // //enter username and password while login
 function Login(formcontrol, value) {
    describe("Enter username and password", function(){
         element(by.css(`input[formcontrolname=${formcontrol}]`)).sendKeys(value);
 })
    }
 Login('username', 'sayalipatil');
 Login('password', '123456789');
 browser.sleep(2000);
  
//  // Click on Hide/ Show icon in password
         function HideShow(className) {
             describe("Click on Hide/ Show icon in password", function(){
                 element(by.css(`.${className}`)).click();
             })
         }
 HideShow('grouped-form .grouped-input .link-button .width-16px');
  
 // click on sign in securely button
 function SignInSecurely(className, sleepTime) {
 describe("click on sign in securely button", function(){
    element(by.css(`.${className}`)).click();
    browser.sleep(sleepTime);
 })
 }
 SignInSecurely('idm-input-container .bg-orange', 3000);
  
 // Click on application menu
 function ApplicationMenu(className, sleepTime) {
    describe("Click on application menu", function(){
        element(by.css(`.${className}`)).click();
        browser.sleep(sleepTime);
    })   
 }
 ApplicationMenu('header-elements .width-25px', 1000);
  
 // Click in search bar
 function SearchBar(className1, sleepTime) {
    describe("Click in search bar", function(){
        element(by.css(`.${className1}`)).click();
        browser.sleep(sleepTime);
    })
 }
 SearchBar('search-mail-input-field .input-field-style', 800);  // Click in search bar
       
  
 //Enter input in search bar
 function InputToserachbar(className, value, sleepTime) {
    describe("Enter input in search bar", function(){
        element(by.css(`.${className}`)).sendKeys(value);
        browser.sleep(sleepTime);
    })
 }
 InputToserachbar('search-mail-input-field .input-field-style', 'Product', 1000); // enter input in search bar
  
           
 // Clcik on cut icon in search bar
 function CutIcon(className, sleepTime) {
     describe("Clcik on cut icon in search bar", function(){
         element(by.css(`.${className}`)).click();
         browser.sleep(sleepTime);
     })
 }
 CutIcon('cross-container .width-13px', 1000); // click on cut icon in search bar
  
 SearchBar('search-mail-input-field .input-field-style', 800);  // Click in search bar
  
 InputToserachbar('search-mail-input-field .input-field-style', 'Product', 1000); // enter input in search bar
  
  
 // Click on search icon in search bar
 function SearchIcon(child, sleepTime) {
     describe("Click on search icon", function(){
         element(by.css(`.search-mail-input-field .cross-container:nth-child(${child}) .link-button`)).click();
         browser.sleep(sleepTime);
     })
 }
 SearchIcon(3, 1000);  // Click on Search icon
  
 // Click on Product Application
 function OpenProductApp(className, sleepTime) {
    describe("Click on Product application", function(){
        element(by.css(`.${className}`)).click();
        browser.sleep(sleepTime);
    })
 }
 OpenProductApp('all-apps-icon-container .mg-x-auto', 5000); // Open Product application
  
 
// Click on select language
function ApplicationMenu1(className, sleepTime) {
    describe("Click on application menu", function(){
        element(by.css(`.${className}`)).click();
        browser.sleep(sleepTime);
    })   
 }
 ApplicationMenu1('header-elements .mg-r-5px', 1000);
  
 // click search language
 element(by.css(".bg-light-white .grouped-input .input-field-style")).click();
  
 // Input search language
 element(by.css(".bg-light-white .grouped-input .input-field-style")).sendKeys("English");
 browser.sleep(2000);
  
 // Cross icon select language search bar
 element(by.css(".mail-input-static-placeholder .width-13px")).click();
 browser.sleep(2000);

 // click search language
 element(by.css(".bg-light-white .grouped-input .input-field-style")).click();
  
 // Input search language
 element(by.css(".bg-light-white .grouped-input .input-field-style")).sendKeys("English");
 browser.sleep(2000);
  
 // Search icon select language search bar
 element(by.css(".ngxp__inner .bg-business-blue .mail-input-static-placeholder .width-17px")).click();
 browser.sleep(2000);
  
  
 // Click in Search currency ( Search language)
 element(by.css(".idm-input-container .grouped-input .input-field-style")).click();
 browser.sleep(1000);
  
 // Select any currency
 element(by.css(".ng-dropdown-panel .ng-dropdown-panel-items .ng-option:nth-child(4)")).click();
 browser.sleep(2000);
  
 // Click on Cut icon in select currency
 element(by.cssContainingText('span', '×')).click();
 browser.sleep(2000);
  
 // Click on Call icon
 element(by.css('button[title="call"]')).click();
 browser.sleep(2000);
 
 element(by.css(".nsm-dialog-btn-close")).click();
 browser.sleep(1000);
  

 // Click on Trade show and govt scheme
 function Show(className, sleepTime){
     describe(" Click on tRade show and Govt scheme", function(){
         element(by.css(`.root-body-container .pd-25px .col-span-1:nth-child(3) .${className}`)).click();
         browser.sleep(sleepTime);
     })
 }
 Show('border-radius-4:nth-child(1)',3000);   // Click on Trade show
 browser.navigate().back();
 browser.sleep(4000);
 Show('border-radius-4:nth-child(2)',3000);  // Click on Govt Schemes
 browser.navigate().back();
 browser.sleep(4000);

//  // Click on search bar
 function ClickSearchBar(className, sleepTime){
     describe(" Click on Search bar", function(){
         element(by.css(`${className}`)).click();
         browser.sleep(sleepTime);
     })
 }
 ClickSearchBar('.height-71px .col-span-1:nth-child(2) .grouped-input .input-field-style', 1000);

 // Input in Search bar
 element(by.css(".height-71px .col-span-1:nth-child(2) .grouped-input .input-field-style")).sendKeys("Gym ball");
 browser.sleep(2000);
  
 // Click on cross icon in search bar
 element(by.css(".cross-container .link-button .width-13px")).click();
 browser.sleep(1000);
  
 ClickSearchBar('.height-71px .col-span-1:nth-child(2) .grouped-input .input-field-style', 1000);  //Click on search bar
 // Input in Search bar
 element(by.css(".height-71px .col-span-1:nth-child(2) .grouped-input .input-field-style")).sendKeys("Gym ball");
 browser.sleep(2000);
 

  
 // Click in all categories of search bar
 element(by.css('ng-select[placeholder="All Categories"]')).click();
 browser.sleep(2000);
  
 // Select 3 rd value from all categories
 element(by.css(".ng-dropdown-panel-items .ng-option:nth-child(3)")).click();
 browser.sleep(1000);
  
 // Click on search icon in search bar
 element(by.css(".cross-container .link-button .width-17px")).click();
 browser.sleep(1000);

 browser.navigate().back();
 browser.sleep(6000);
  browser.navigate().back();
 browser.sleep(8000);
 
 // Click on Categories
function Categories(child1, child2, sleepTime){
    describe(" Click on Rade show and Govt scheme", function(){
        element(by.css(`.root-body-container .pd-25px .col-span-1:nth-child(${child1}) .mg-b-15px:nth-child(${child2})`)).click();
        browser.sleep(sleepTime);
    })
}
Categories(1, 2, 2000)  // Click on Musical instruments
browser.navigate().back();
browser.sleep(4000);

Categories(1, 3, 2000)  // Click on Minerals and Metallurgy
browser.navigate().back();
browser.sleep(4000);

Categories(1, 4, 2000)  // Click on Gym and Fitness 
browser.navigate().back();
browser.sleep(4000);

Categories(1, 5, 2000)  // Click on Animals and Pet supplies
browser.navigate().back();
browser.sleep(4000);

Categories(1, 6, 3000)  // Plastic Industry 
browser.navigate().back();
browser.sleep(4000);

Categories(1, 7, 3000)  // Rubber Industry
browser.navigate().back();
browser.sleep(4000);

Categories(1, 8, 3000)  // Contruction Industry 
browser.navigate().back();
browser.sleep(4000);

Categories(1, 9, 3000)   // Packaging Industry
browser.navigate().back();
browser.sleep(4000);

Categories(1, 10, 3000)  //Parts and accessories
browser.navigate().back();
browser.sleep(4000);

Categories(1, 11, 3000)  // Sports and Entertaiment 
browser.navigate().back();
browser.sleep(5000);
 
// Click on All categories
element(by.cssContainingText('p', 'All Categories')).click();
browser.sleep(6000);


//  Click in Drop down of select categories
function DropDownClick(className, sleepTime){
    describe("Click in Drop Down", function(){
        element(by.css(`${className}`)).click();
        browser.sleep(sleepTime);
    })
}
DropDownClick('.display-flex .grouped-input .single-chip', 2000);

//Input in search primary categories
element(by.css("ng-select[placeholder='Search Primary Category'] input")).sendKeys("Gym & fitness");
browser.sleep(3000);

//Cut in search primary categories
element(by.cssContainingText('span', '×')).click();
browser.sleep(1000);

//  Click in Drop down of select categories (Primary category)
function DropDownClick(className, sleepTime){
    describe("Click in Drop Down", function(){
        element(by.css(`${className}`)).click();
        browser.sleep(sleepTime);
    })
}
DropDownClick('.display-flex .grouped-input .single-chip', 2000);

// Select drop down values  (Primary category)
function DropDownSelect(child, sleepTime) {
    describe("Select drop down values", function(){
        element(by.css(`.ng-dropdown-panel-items .ng-option:nth-child(${child})`)).click();
        browser.sleep(sleepTime);
    })
}
DropDownSelect(17, 1500);  // Select value

// click on image of Categories   Primary
element(by.css(".pd-12px .col-span-1:nth-child(1) .pd-24px .center-text")).click();
browser.sleep(3000);

// click on image of Categories  Secondary
element(by.css(".pd-12px .col-span-1:nth-child(18) .pd-24px .center-text")).click();
browser.sleep(3000);

// click on image of Categories  tertiary
element(by.css(".pd-12px .col-span-1:nth-child(1) .pd-24px .center-text")).click();
browser.sleep(3000);

// click on image of Categories  Product type
element(by.css(".pd-12px .col-span-1:nth-child(1) .pd-24px .center-text")).click();
browser.sleep(5000);

// Click on save product icon of Any product in list  (1st product)
element(by.css(".tabs-result .business-product-grid .col-span-1:nth-child(1) .col-span-1:nth-child(2) .link-button .width-20px")).click();
browser.sleep(2000);

// Click on any product in list  (1st product)
element(by.css(".tabs-result .business-product-grid .col-span-1:nth-child(1) .product__image--container .background-style-contain")).click();
browser.sleep(4000)

browser.navigate().back();
   browser.sleep(5000);

// Click in Sort by
element(by.css(".grouped-input .select-field-style")).click();
browser.sleep(2000);

//Select values in dropdown sort ( Popularity)
        element(by.cssContainingText('option', 'Popularity')).click();
        await browser.sleep(1000);
        console.log("Select Popularirity"); 

// Click in Sort by
element(by.css(".grouped-input .select-field-style")).click();
browser.sleep(2000);


element(by.cssContainingText('option', 'Featured')).click();
        await browser.sleep(1000);
        console.log("Select Featured"); 

// Click in Sort by
element(by.css(".grouped-input .select-field-style")).click();
browser.sleep(2000);

        element(by.cssContainingText('option', 'Price Range')).click();
        await browser.sleep(1000);
        console.log("Select Price Range"); 
      
// Click in Sort by
element(by.css(".grouped-input .select-field-style")).click();
browser.sleep(2000);

        element(by.cssContainingText('option', 'Customer Review')).click();
        await browser.sleep(1000);
        console.log("Select Customer Review"); 

    // Click in Sort by
element(by.css(".grouped-input .select-field-style")).click();
browser.sleep(2000);
        
        element(by.cssContainingText('option', 'Newest First')).click();
        await browser.sleep(1000);
        console.log("Select Newest First"); 


        
// Click on filter result
element(by.css(".remaining-place .search-bttn-style")).click();
browser.sleep(2000);


//  Click in Drop down of location filters
function DropDownClick1(Name, sleepTime){
    describe("Click in Drop Down", function(){
        element(by.css(`ng-select[formcontrolname=${Name}]`)).click();
        browser.sleep(sleepTime);
    })
}
DropDownClick1('location', 1000);

// Input in location filters
function DropDownClick2(Name, sleepTime){
    describe("Click in Drop Down", function(){
        element(by.css(`ng-select[formcontrolname=${Name}] input`)).sendKeys("Thane")
        browser.sleep(sleepTime);
    })
}
DropDownClick2('location', 2000);

// Select drop down values
function DropDownSelectlocation(child, sleepTime) {
    describe("Select drop down values", function(){
        element(by.css(`.ng-dropdown-panel-items .ng-option:nth-child(${child})`)).click();
        browser.sleep(sleepTime);
    })
}
DropDownSelectlocation(1, 500);  // Select value3rd value

//Cut in location filters
element(by.cssContainingText('span', '×')).click();
browser.sleep(1000);

// Click on close icon filter result
element(by.css(".link-button")).click();
browser.sleep(2000);


element(by.cssContainingText('span', 'Saved Products')).click();
browser.sleep(2000);

element(by.cssContainingText('span', 'My Products')).click();
browser.sleep(2000);

element(by.cssContainingText('span', 'My Organization')).click();
browser.sleep(2000);

element(by.cssContainingText('span', 'My RFQs')).click();
browser.sleep(3000);




browser.get("https://mesbro.com/search/business/product/landing");
await browser.sleep(8000);

//  // Trending>>Saved later icon
 element(by.css(".pd-25px .swiper:nth-child(1) .swiper-slide:nth-child(3) .display-grid .link-button")).click();
 browser.sleep(2000);
  
  
//    //trending products detail page   
 // Click on any product in Trending Product
 function ListProductOpen(child1, child2, sleepTime){
     describe("Click on any product in Trending Product", function(){
         element(by.css(`.pd-25px .pd-x-12px:nth-child(${child1}) .swiper-wrapper .col-span-1:nth-child(${child2})`)).click();
         browser.sleep(sleepTime);
     })
 }
 ListProductOpen(1, 3, 3000);  // 3rd product in trending product is opened

 function like(waitTime, child){
    describe("redirect to scrap",function(){
        element(by.css(`.col-span-1:nth-child(2) .display-flex .link-button:nth-child(${child})`)).click();
        browser.sleep(waitTime);
    })
    }
    like(3000,1); // Click on the Like Button
    like(2000,2); // Click on the DisLike Button   
    
    like(2000,4); // Click on the Saved Product Button
    like(5000,5); // Click on the Print Button
    like(5000,6); // Click on the QR code Button
    like(5000,7); // Click on the Share Button
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
await browser.sleep(3000);

element(by.css(".nsm-dialog-btn-close")).click();
browser.sleep(1000);

await element(by.css('.display-flex .col-span-1:nth-child(2)')).click(); //chat
await browser.sleep(3000);


element(by.css(".nsm-dialog-btn-close")).click();
browser.sleep(1000);

await element(by.css('.display-flex .col-span-1:nth-child(3)')).click(); //mail
await browser.sleep(3000);
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

// // Can we post on the story on this article to inspire readers
// function optionSelect(formControl, sleepTime) {
//                                 describe("select option", function(){
//                                     element(by.css(`ng-select[formcontrolname=${formControl}]`)).click();
//                                     browser.sleep(sleepTime);
//                                 })    
//                             }
//                             optionSelect('opinion', 3000);
    
//                            function dropdown(waitTime, child){
//                                     describe("dropdownvalue",function(){
//                                          element(by.css(`.ng-dropdown-panel-items .ng-option:nth-child(${child})`)).click();
//                                         browser.sleep(waitTime);     
//                                     })
//                                 }
//                                 dropdown(3000,1);

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
  await browser.sleep(3000);
 
  await element(by.css('.business__productCard--container .link-button')).click();
  await browser.sleep(3000);



  browser.get("https://mesbro.com/search/business/product/landing");
  await browser.sleep(8000);
 
// new arrival saved icon
element(by.css(".pd-25px .border-faded-35:nth-child(3) .col-span-1:nth-child(1) .col-span-1:nth-child(2) .center-text .link-button .width-20px")).click();      
browser.sleep(4000);
 

 
// // New arrival product detail page
   function productopen1(child1, child2, sleepTime) {
       describe("product  field", function(){
           element(by.css(`.pd-25px .pd-x-12px:nth-child(${child1}) .swiper-wrapper .col-span-1:nth-child(${child2})`)).click();
           browser.sleep(waitTime);
       })   
    }
           productopen1(3, 3,8000);


   browser.navigate().back();
   browser.sleep(5000);

// // Click on Join Now button
element(by.cssContainingText('button', ' Join Now ')).click();
browser.sleep(3000);
 
//feature saved icon
element(by.css(".display-grid .col-span-1:nth-child(1) .col-span-1:nth-child(1) .col-span-1:nth-child(2) .center-text .link-button .width-20px")).click();      
browser.sleep(4000);

//feature product open
    function Featureproductopen(waitTime, child) {
       describe("product  field", function(){
           element(by.css(`.display-grid .col-span-1:nth-child(${child}) .col-span-1:nth-child(1) .product-onHover-style`)).click();
           browser.sleep(waitTime);
       })   
    }
           Featureproductopen(3000,1);
//compare icon 
function compareicon(waitTime, child){
    describe("redirect to property",function(){
        element(by.css(`.col-span-1:nth-child(2) .display-flex .link-button:nth-child(${child})`)).click();
        browser.sleep(waitTime);
    })
    }
    compareicon(3000,3);

   browser.navigate().back();
browser.sleep(7000);
 
// Recent Search saved icon
element(by.css(".display-grid .col-span-1:nth-child(2) .col-span-1:nth-child(1) .col-span-1:nth-child(2) .center-text .link-button .width-20px")).click();      
browser.sleep(6000);
 
// Recent Search open
 function Recentproductopen(waitTime, child) {
        describe("product  field", function(){
            element(by.css(`.display-grid .col-span-1:nth-child(${child}) .col-span-1:nth-child(3) .product-onHover-style`)).click();
            browser.sleep(waitTime);
        })   
     }
            Recentproductopen(3000,2);

browser.navigate().back();
browser.sleep(6000);

 
// // popular saved icon
element(by.css(".pd-25px .border-faded-35:nth-child(7) .col-span-1:nth-child(1) .col-span-1:nth-child(2) .center-text .link-button .width-20px")).click();      
browser.sleep(4000);

 
// //popular product open
   function productopen7(child1, child2, sleepTime) {
       describe("product  field", function(){
           element(by.css(`.pd-25px .pd-x-12px:nth-child(${child1}) .swiper-wrapper .col-span-1:nth-child(${child2})`)).click();
           browser.sleep(waitTime);
       })   
    }
           productopen7(7, 3,5000);
   browser.sleep(5000);

   browser.navigate().back();
 browser.sleep(4000);
 
 
// CClick on Know more jobs, property, email
function KnowMore(className, sleepTime){
    describe("Click in Email address of newsletter", function(){
        element(by.css(`${className}`)).click();
        browser.sleep(sleepTime);
    })
}
 
 
 KnowMore('.mg-b-25px .col-span-1:nth-child(1) .bttn-medium', 2000);  // Click on Know more Jobs
 browser.navigate().back();
 browser.sleep(4000);
KnowMore('.mg-b-25px .col-span-1:nth-child(2) .bttn-medium', 2000);// Click on Know more property
browser.navigate().back();
 browser.sleep(4000);
 KnowMore('.mg-b-25px .col-span-1:nth-child(3) .bttn-medium', 5000);  // Click on Know more Email
 browser.navigate().back();
 browser.sleep(6000);
 
//Global marketplace Know more button
element(by.css(".pd-24px .col-span-1 .width-100 .center-text .bg-transparent")).click();
browser.sleep(3000);
browser.navigate().back();
browser.sleep(4000);
 
// One request multiple quotes
// // Click on search bar of RFQ
function ClickSearch(className, sleepTime){
    describe(" Click on Search bar", function(){
        element(by.css(`${className}`)).click();
        browser.sleep(sleepTime);
    })
}
ClickSearch('.pd-24px .col-span-1:nth-child(2) .grouped-input .input-field-style', 1000);
 
// Enter input in search bar Of RFQ
function ClickSearchBar(className, sleepTime){
    describe("Enter input in search bar", function(){
        element(by.css(`${className}`)).sendKeys("abcdefghij");
        browser.sleep(sleepTime);
    })
}
ClickSearchBar('.pd-24px .col-span-1:nth-child(2) .grouped-input .input-field-style', 1000);
 
// Click on cross icon in search bar of RFQ
element(by.css(".pd-24px .col-span-1:nth-child(2) .cross-container .link-button .width-13px")).click();
browser.sleep(1000);

// Click on search bar of RFQ
ClickSearch('.pd-24px .col-span-1:nth-child(2) .grouped-input .input-field-style', 1000);

// Enter input in search bar Of RFQ
ClickSearchBar('.pd-24px .col-span-1:nth-child(2) .grouped-input .input-field-style', 1000);
 
// Click in all categories of RFQ
element(by.css(".pd-24px .col-span-1:nth-child(2) .cross-container .width-100")).click();
browser.sleep(2000);
 
// Select all categories in RFQ ( 3rd category select)
element(by.css(".ng-dropdown-panel-items .ng-option:nth-child(3)")).click();
browser.sleep(1000);
 
// Click on search icon in search bar of RFQ
element(by.css(".pd-24px .col-span-1:nth-child(2) .cross-container .link-button .width-17px")).click();
browser.sleep(1000);
 
 
// Enter input in Quantity Of RFQ
function InputQuantity(className, sleepTime){
    describe("Enter input in search bar", function(){
        element(by.css(`${className}`)).sendKeys("120");
        browser.sleep(sleepTime);
    })
}
InputQuantity('.pd-24px .col-span-1:nth-child(2) .display-grid  .col-span-1 .grouped-input .input-field-style', 1000);
 
// Click on cross icon of Quantity of RFQ
element(by.css(".pd-24px .col-span-1:nth-child(2) .col-span-1 .append .link-button .width-13px")).click();
browser.sleep(1000);

// Enter input in Quantity Of RFQ
function InputQuantity(className, sleepTime){
    describe("Enter input in search bar", function(){
        element(by.css(`${className}`)).sendKeys("120");
        browser.sleep(sleepTime);
    })
}
InputQuantity('.pd-24px .col-span-1:nth-child(2) .display-grid  .col-span-1 .grouped-input .input-field-style', 1000);
 
// Click in Unit and Sourcing Purpose Of RFQ
function ClickUnit(className, sleepTime){
    describe("Click in Unit and Sourcing Purpose Of RFQ", function(){
        element(by.css(`${className}`)).click();
        browser.sleep(sleepTime);
    })
}
ClickUnit('.pd-24px .col-span-1:nth-child(2) .display-grid  .col-span-1:nth-child(2) .grouped-input .single-chip', 1000);  // Click in Unit of rfq
 
// Input in Unit
element(by.css('ng-select[placeholder="Units"] input')).sendKeys("Bags");
browser.sleep(2000);
 
// Select drop down values of unit of RFQ
element(by.css(".ng-dropdown-panel-items .ng-option:nth-child(1)")).click();
 browser.sleep(1000);
 
 
// Click in Sourcing purpose
ClickUnit('.pd-24px .col-span-1:nth-child(2) .display-grid  .col-span-1:nth-child(3) .grouped-input .single-chip', 1000);  // Click in Sourcing purpose of rfq
browser.sleep(2000);
 
// Input in Sourcing purpose
element(by.css('ng-select[placeholder="Sourcing Purpose"] input')).sendKeys("Personal use");
browser.sleep(2000);
 
// Select drop down values of Sourcing purpose of RFQ
element(by.css(".ng-dropdown-panel-items .ng-option:nth-child(1)")).click();
 browser.sleep(1000);
 
 
// Click in Requirements Of RFQ
function Requirements(className, sleepTime){
    describe("Click in Unit and Sourcing Purpose Of RFQ", function(){
        element(by.css(`${className}`)).click();
        browser.sleep(sleepTime);
    })
}
 
// Input in Requirements Of RFQ
function Requirements1(className, sleepTime, value){
    describe("Click in Unit and Sourcing Purpose Of RFQ", function(){
        element(by.css(`${className}`)).sendKeys(value)
        browser.sleep(sleepTime);
    })
}
Requirements('.pd-24px .col-span-1:nth-child(2) .grouped-input .text-area-style', 1000);  // Click in Unit of rfq
 
Requirements1('.pd-24px .col-span-1:nth-child(2) .grouped-input .text-area-style', 1000, 'qwerty');  // Click in Unit of rfq
 
// Click on Submit button
element(by.cssContainingText('button', ' Submit ')).click();
browser.sleep(3000);
 

 
 
 
// CClick in Email address of newsletter
function EmailClick(className, sleepTime){
    describe("Click in Email address of newsletter", function(){
        element(by.css(`${className}`)).click();
        browser.sleep(sleepTime);
    })
}
EmailClick('.border-radius-4 .mg-x-auto .grouped-input .input-field-style', 1000);
 
 
// Input in Email address of newsletter
function EmailClick1(className, sleepTime){
    describe("Click in Email address of newsletter", function(){
        element(by.css(`${className}`)).sendKeys("123@mesbro.com")
        browser.sleep(sleepTime);
    })
}
EmailClick1('.border-radius-4 .mg-x-auto .grouped-input .input-field-style', 2000);
 
// Click on Subscribe button
element(by.cssContainingText('button', ' Subscribe ')).click();
browser.sleep(2000);
 
// Click on Home
function Home(className, sleepTime){
    describe(" Click on Home", function(){
        element(by.css(`${className}`)).click();
        browser.sleep(sleepTime);
    })
}
Home('.height-71px .col-span-1 .link-button', 1000);
 
// Click on Compare
function Top(className, sleepTime){
    describe(" Click on Top", function(){
        element(by.css(`${className}`)).click();
        browser.sleep(sleepTime);
    })
}
Top('.height-71px .col-span-1:nth-child(3) .link-button:nth-child(1)', 4000);  // Click on Compare

function browserbutton(button, sleepTime){
    describe("mesbro browser icon",function(){
        element(by.css(`${button}`)).click();
        browser.sleep(sleepTime);
    })
    }
    browserbutton('.browser-product-bttn .bttn-medium',2000);
  
 //product detail page
    function product(waitTime, child) {
      describe("redirect to product  page", function(){
    element(by.css(`.tabs-result .col-span-1:nth-child(${child})`)).click();
            browser.sleep(waitTime);
        })   
    }
    product(3000,2);
 //click on compare icon
    function compareiconproduct(waitTime, child){
        describe("click on the compare icon",function(){
            element(by.css(`.col-span-1:nth-child(2) .display-flex .link-button:nth-child(${child})`)).click();
            browser.sleep(waitTime);
        })
        }
        compareiconproduct(4000,3);
  
 //click on the compare button
  
    function compareButtonproduct(waitTime, child) {
        describe("redirect to compare page", function(){
            element(by.css(`.col-span-1:nth-child(3) .display-flex:nth-child(${child}) .link-button`)).click();
            browser.sleep(waitTime);
        })   
    }
    compareButtonproduct(3000,1);
 //on the compare click on the cross icon 


     await  element(by.css('.compare-product-table-grid .table-col-2-grid .width-14px')).click();
  await browser.sleep(2000);

 //saved icon on the compare page
 function savedicon(waitTime, child) {
    describe("saved page",function() {
        element (by.css(`.table-col-2-grid:nth-child(${child}) .col-span-1:nth-child(2) .width-20px`)).click();
        browser.sleep(waitTime);
    })
 }
 savedicon(3000,2);
  
 //redirect to product detail page 
 function detail(waitTime, child) {
    describe("redirect to the product detail page",function() {
        element (by.css(`.table-col-2-grid:nth-child(${child}) .col-span-1:nth-child(2) .center-text`)).click();
        browser.sleep(waitTime);
    })
 }
 detail(3000,2);
  

Top('.height-71px .col-span-1:nth-child(3) .link-button:nth-child(2)', 3000);  // Click on My Products
Top('.height-71px .col-span-1:nth-child(3) .link-button:nth-child(3)', 4000);  // Click on Saved Products
await browser.sleep(3000);

function removefromsaved(waitTime, child) {
   describe("saved page",function() {
       element (by.css(`.business-product-grid .col-span-1:nth-child(${child}) .width-20px`)).click();
       browser.sleep(waitTime);
   })
}
removefromsaved(3000,2);
 
//click on the clear saved 
function clearsaved(clearsavedlist, sleepTime) {
   describe("saved page",function() {
       element (by.css(`${clearsavedlist}`)).click();
       browser.sleep(sleepTime);
   })
}
clearsaved('.link-button .width-14-px',2000);
 

Top('.height-71px .col-span-1:nth-child(3) .bttn-flat', 4000);//Click on RFQ
function rfq(waitTime, child) {
    describe("redirect to rfq page", function(){
        element(by.css(`.col-span-1:nth-child(${child}) .bttn-medium`)).click();
        browser.sleep(waitTime);
    })   
}
rfq(3000,1);
//primary
await element (by.css('ng-select[placeholder="Search Primary Category"] input')).sendKeys('Musical Instrument');
await browser.sleep(4000);

function clear(clear, sleepTime){
describe("mesbro application clear",function(){
    element(by.css(`${clear}`)).click();
    browser.sleep(sleepTime);
    })
    }
 clear('.ng-clear-wrapper',2000);
   
function dropdown(waitTime, child){
 describe("dropdownvalue",function(){
 element(by.css(`.ng-dropdown-panel-items .ng-option:nth-child(${child})`)).click();
 browser.sleep(waitTime);    
                         })
                 }
 dropdown(2000,1);
function select(waitTime, child){
describe("selectvalue",function(){
element(by.css(`.pd-12px .col-span-1:nth-child(${child})`)).click();
browser.sleep(waitTime);    
                            })
                      }
select(2000,1);
    //secondary
await element (by.css('ng-select[placeholder="Search Secondary Category"] input')).sendKeys('Keys');
await browser.sleep(4000);

function clearsecondary(clear, sleepTime){
describe("mesbro application clear",function(){
element(by.css(`${clear}`)).click();
browser.sleep(sleepTime);
              })
       }
clearsecondary('.ng-clear-wrapper',2000);
               
function dropdownsecondary(waitTime, child){
 describe("dropdownvalue",function(){
 element(by.css(`.ng-dropdown-panel-items .ng-option:nth-child(${child})`)).click();
 browser.sleep(waitTime);    
                    })
                 }
dropdownsecondary(2000,1);
function selectsecondary(waitTime, child){
 describe("selectvalue",function(){
 element(by.css(`.pd-12px .col-span-1:nth-child(${child})`)).click();
 browser.sleep(waitTime);    
                    })
               }
  selectsecondary(2000,1);
//Tertiary
await element (by.css('ng-select[placeholder="Search Tertiary Category"] input')).sendKeys('Keyboards');
browser.sleep(2000);            

function clearTertiary (clear, sleepTime){
describe("mesbro application clear",function(){
element(by.css(`${clear}`)).click();
browser.sleep(sleepTime);
})
  }
clearTertiary ('.ng-clear-wrapper',2000);
                           
function dropdownTertiary (waitTime, child){
describe("dropdownvalue",function(){
element(by.css(`.ng-dropdown-panel-items .ng-option:nth-child(${child})`)).click();
browser.sleep(waitTime);    
           })
   }
dropdownTertiary (2000,1);

function selectTertiary (waitTime, child){
describe("selectvalue",function(){
element(by.css(`.pd-12px .col-span-1:nth-child(${child})`)).click();
browser.sleep(waitTime);    
                  })
            }
selectTertiary (2000,1);

//product type

await element(by.css('.col-span-1 .border-faded-35 .col-span-1:nth-child(1) .mg-b-25px')).click();
browser.sleep(3000);  
//product basic info page 
function sourcingType(formControl, sleepTime) {
 describe("type", function(){
element(by.css(`ng-select[formControlName=${formControl}]`)).click();
browser.sleep(sleepTime);
          })   
           }
sourcingType('sourcingType', 2000);
                                           
function dropdownsourcingType(waitTime, child){
describe("dropdownvalue",function(){
element(by.css(`.ng-dropdown-panel-items .ng-option:nth-child(${child})`)).click();
browser.sleep(waitTime);    
                  })
                  }
dropdownsourcingType(2000,1);

function sourcingPurpose(formControl, sleepTime) {
describe("type", function(){
element(by.css(`ng-select[formControlName=${formControl}]`)).click();
browser.sleep(sleepTime);
     })   
     }
sourcingPurpose('sourcingPurpose', 2000);
                                                                     
function dropdownsourcingPurpose(waitTime, child){
describe("dropdownvalue",function(){
element(by.css(`.ng-dropdown-panel-items .ng-option:nth-child(${child})`)).click();
browser.sleep(waitTime);    
              })
          }
dropdownsourcingPurpose(2000,1);
                           
function tradeTerms(formControl, sleepTime) {
describe("type", function(){
element(by.css(`ng-select[formControlName=${formControl}]`)).click();
browser.sleep(sleepTime);
      })   
          }
tradeTerms('tradeTerms', 2000);
                                                                                                                 
function dropdowntradeTerms(waitTime, child){
describe("dropdownvalue",function(){
element(by.css(`.ng-dropdown-panel-items .ng-option:nth-child(${child})`)).click();
browser.sleep(waitTime);    
                        })
}
dropdowntradeTerms(2000,1);

function quantity(formControl, sleepTime) {
describe("type", function(){
element(by.css(`input[formControlName=${formControl}]`)).sendKeys('1212');
browser.sleep(sleepTime);
})  
}
quantity('quantity', 2000);

function units(formControl, sleepTime) {
describe("type", function(){
element(by.css(`ng-select[formControlName=${formControl}]`)).click();
browser.sleep(sleepTime);
})   
}
units('units', 2000);

function dropdownunits(waitTime, child){
describe("dropdownvalue",function(){
element(by.css(`.ng-dropdown-panel-items .ng-option:nth-child(${child})`)).click();
browser.sleep(waitTime);    
})
}
dropdownunits(2000,1);
//location field
await element (by.css('ng-select[placeholder="Type to Search..."] input')).sendKeys('Kalyan');
browser.sleep(2000); 

function dropdownlocation(waitTime, child){
describe("dropdownvalue",function(){
element(by.css(`.ng-dropdown-panel-items .ng-option:nth-child(${child})`)).click();
browser.sleep(waitTime);    
})
}
dropdownlocation(2000,1);


function priceFrom(formControl, sleepTime) {
describe("type", function(){
element(by.css(`input[formControlName=${formControl}]`)).sendKeys('1212');
browser.sleep(sleepTime);
})  
}
priceFrom('priceFrom', 2000);


function priceTo(formControl, sleepTime) {
describe("type", function(){
element(by.css(`input[formControlName=${formControl}]`)).sendKeys('1218');
browser.sleep(sleepTime);
})  
}
priceTo('priceTo', 2000);

function currency(formControl, sleepTime) {
describe("type", function(){
element(by.css(`ng-select[formControlName=${formControl}]`)).click();
browser.sleep(sleepTime);
})   
}
currency('currency', 2000);

function dropdowncurrency(waitTime, child){
describe("dropdownvalue",function(){
element(by.css(`.ng-dropdown-panel-items .ng-option:nth-child(${child})`)).click();
browser.sleep(waitTime);    
})
}
dropdowncurrency(2000,1);


function organizationNameit(formControl, sleepTime) {
describe("name", function(){
element(by.css(`input[formControlName=${formControl}]`)).sendKeys('Mesbro');
browser.sleep(sleepTime);
})  
}
organizationNameit('organizationName', 2000);


function details(formControl, sleepTime) {
describe("type", function(){
element(by.css(`textarea[formControlName=${formControl}]`)).sendKeys('Required');
browser.sleep(sleepTime);
})  
}
details('details', 2000);
//media field
// function image(pic, sleepTime){
//     describe("add coverimage",function(){
//     element(by.css(`${pic}`)).click();
//     browser.sleep(sleepTime);
//     })              
//           }
//     image('.upload-attach-button .link-button', 3000);




// //file manager page


//     function file(waitTime, child){
//         describe("add image from file",function(){
//              element(by.css(`.media-grid .col-span-1:nth-child(${child})`)).click();
//                 browser.sleep(waitTime);
//                             })
//                         }
//                 file(5000,3);

//     //submit button
//     await element(by.css('.bttn-flat  .width-100')).click();
// browser.sleep(3000); 

//certification field ---product basic info page        
function certification(formControl, sleepTime) {
describe("type", function(){
element(by.css(`ng-select[formControlName=${formControl}]`)).click();
browser.sleep(sleepTime);
})   
}
certification('certification', 2000);  

function dropdowncertification(waitTime, child){
describe("dropdownvalue",function(){
element(by.css(`.ng-dropdown-panel-items .ng-option:nth-child(${child})`)).click();
browser.sleep(waitTime);    
})
}
dropdowncertification(2000,1);

function otherRequirement(formControl, sleepTime) {
describe("type", function(){
element(by.css(`textarea[formControlName=${formControl}]`)).sendKeys('Required...');
browser.sleep(sleepTime);
})  
}
otherRequirement('otherRequirement', 2000);

function shippingMethod(formControl, sleepTime) {
describe("type", function(){
element(by.css(`ng-select[formControlName=${formControl}]`)).click();
browser.sleep(sleepTime);
})   
}
shippingMethod('shippingMethod', 2000);

function dropdownshippingMethod(waitTime, child){
describe("dropdownvalue",function(){
element(by.css(`.ng-dropdown-panel-items .ng-option:nth-child(${child})`)).click();
browser.sleep(waitTime);    
})
}
dropdownshippingMethod(2000,1);

function destination(formControl, sleepTime) {
describe("type", function(){
element(by.css(`ng-select[formControlName=${formControl}]`)).click();
browser.sleep(sleepTime);
})   
}
destination('destination', 2000);

function dropdowndestination(waitTime, child){
describe("dropdownvalue",function(){
element(by.css(`.ng-dropdown-panel-items .ng-option:nth-child(${child})`)).click();
browser.sleep(waitTime);    
})
}
dropdowndestination(2000,1);

function paymentTerm(formControl, sleepTime) {
describe("type", function(){
element(by.css(`ng-select[formControlName=${formControl}]`)).click();
browser.sleep(sleepTime);
})   
}
paymentTerm('paymentTerm', 2000);

function dropdownpaymentTerm(waitTime, child){
describe("dropdownvalue",function(){
element(by.css(`.ng-dropdown-panel-items .ng-option:nth-child(${child})`)).click();
browser.sleep(waitTime);    
})
}
dropdownpaymentTerm(2000,1);
//checkbox



function checkbox(waitTime, child){
describe("value",function(){
element(by.css(`.mg-b-16px:nth-child(${child})`)).click();
browser.sleep(waitTime);    
})
}
checkbox(2000,1);

await element(by.css('.i-am-form-checkbox:nth-child(2)')).click();
browser.sleep(3000);
await element (by.css('input[type=checkbox]')).click();
browser.sleep(3000);

await browser.driver.get('https://mesbro.com/search/request-for-quotation/0');
 await browser.sleep(5000);
  
 //rfq supplier page
   function rfqpage(child, waitTime) {
  describe("redirect to rfq page", function(){
   element(by.css(`.col-span-1:nth-child(${child}) .center-text .bttn-medium`)).click();
  browser.sleep(waitTime);
    })   
 }
 rfqpage(2,3000);
 //click on the quote button
  
 function rfqspageto(child, waitTime) {
    describe("redirect to rfq page", function(){
        element(by.css(`.col-span-1:nth-child(${child}) .border-faded-35 .col-span-1:nth-child(2) .bttn-medium`)).click();
        browser.sleep(waitTime);
    })   
 }
 rfqspageto(2,3000);
  
 //click on the primary category
  
 function rfqcategory(waitTime, child) {
    describe("redirect to rfq page", function(){
        element(by.css(`.col-span-1:nth-child(${child}) .rfq-category-onHover`)).click();
        browser.sleep(waitTime);
    })   
 }
 rfqcategory(3000,2);
  
  Top('.height-71px .col-span-1:nth-child(3) .link-button:nth-child(4)', 5000);  // Click on History

  await element(by.css('.display-grid .checkmark')).click(); //select checkbox
  await browser.sleep(2000);

   await element(by.css('.pd-25px .display-flex .container .checkmark')).click(); //select all checkbox 
   await browser.sleep(2000);

   await element(by.css('.pd-25px .display-flex .link-button')).click(); //selete all button
   await browser.sleep(2000);
   await element(by.css('.pd-25px .display-flex .link-button:nth-child(2)')).click(); //select  all button
   await browser.sleep(2000);


  await element(by.css('.display-grid .display-flex .width-16px')).click(); //compare icon
  await browser.sleep(2000);
  await element(by.css('.pd-25px .display-grid .display-flex .mg-r-20px:nth-child(3)')).click(); //shared product
  await browser.sleep(2000);
  await element(by.css('.pd-25px .display-grid .display-flex .link-button:nth-child(4)')).click(); //Delete product
  await browser.sleep(2000);






});
});
