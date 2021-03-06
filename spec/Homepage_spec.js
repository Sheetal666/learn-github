describe('Mesbro Homepage', function() {
    it('Mesbro homepage launch', async function(done) {
          console.log('hello');      
   
          browser.waitForAngularEnabled(false);
          browser.ignoreSynchronization= true
          browser.sleep(2000);
          browser.manage().window().maximize()
  
  
 //Launching mesbro homepage
    browser.get("https://mesbro.in/idm/sign-in");
    await browser.sleep(4000);
  
 //     // Sign in is required pop-up
 // function SignInRequired(className) {
 //     describe("Sign in is required", function(){
 //         element(by.css(`.nsm-content .${className}`)).click();
 //     })
 // }
 // SignInRequired('bg-faded-45');  // Click on May be later in pop-up
 // SignInRequired('bg-red');  // Click on Sign in button in pop-up
  
 // //enter username and password while login
 function Login(formcontrol, value) {
    describe("Enter username and password", function(){
         element(by.css(`input[formcontrolname=${formcontrol}]`)).sendKeys(value);
 })
    }
 Login('username', 'sayalipatil');
 Login('password', '123456789');

 browser.sleep(2000);
 
// // Click on Hide/ Show icon in password
//         function HideShow(className) {
//             describe("Click on Hide/ Show icon in password", function(){
//                 element(by.css(`.${className}`)).click();
//             })
//         }
// HideShow('grouped-form .grouped-input .link-button .width-16px');
 
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
  
           
 // // Click on cut icon in search bar
 // function CutIcon(className, sleepTime) {
 //     describe("Click on cut icon in search bar", function(){
 //         element(by.css(`.${className}`)).click();
 //         browser.sleep(sleepTime);
 //     })
 // }
 // CutIcon('cross-container .width-13px', 1000); // click on cut icon in search bar
  
 // SearchBar('search-mail-input-field .input-field-style', 800);  // Click in search bar
  
 // InputToserachbar('search-mail-input-field .input-field-style', 'Product', 1000); // enter input in search bar
  
  
 // // Click on search icon in search bar
 // function SearchIcon(child, sleepTime) {
 //     describe("Click on search icon", function(){
 //         element(by.css(`.search-mail-input-field .cross-container:nth-child(${child}) .link-button`)).click();
 //         browser.sleep(sleepTime);
 //     })
 // }
 // SearchIcon(3, 1000);  // Click on Search icon
  
 // Click on Product Application
function OpenProductApp(className, sleepTime) {
    describe("Click on Product application", function(){
        element(by.css(`.${className}`)).click();
        browser.sleep(sleepTime);
    })
 }
 OpenProductApp('all-apps-icon-container .mg-x-auto', 5000); // Open Product application
  
//  // Click on select language
 function ApplicationMenu1(className, sleepTime) {
    describe("Click on application menu", function(){
        element(by.css(`.${className}`)).click();
        browser.sleep(sleepTime);
    })   
 }
 ApplicationMenu1('header-elements .mg-r-5px', 1000);
  // Click on select language
function ApplicationMenu1(className, sleepTime) {
    describe("Click on application menu", function(){
        element(by.css(`.${className}`)).click();
        browser.sleep(sleepTime);
    })   
 }
 ApplicationMenu1('header-elements .mg-r-5px', 1000);
  
 // click select language
 element(by.css(".bg-light-white .grouped-input .input-field-style")).click();
  
 // Input select language
 element(by.css(".bg-light-white .grouped-input .input-field-style")).sendKeys("marathi");
 browser.sleep(2000);
  
//  // Cross icon select language search bar
//  element(by.css(".mail-input-static-placeholder .width-13px")).click();
//  browser.sleep(2000);
  
 // Search icon select language search bar
 element(by.css(".mail-input-static-placeholder .width-17px")).click();
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

 
// // Click on Call icon
element(by.css('button[title="call"]')).click();
browser.sleep(2000);
 
 
 
// Click on Trade show and govt scheme
function Show(className, sleepTime){
    describe(" Click on Rade show and Govt scheme", function(){
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
// // Click on search bar
// function ClickSearchBar(className, sleepTime){
//     describe(" Click on Search bar", function(){
//         element(by.css(`${className}`)).click();
//         browser.sleep(sleepTime);
//     })
// }
// ClickSearchBar('.height-71px .col-span-1:nth-child(2) .grouped-input .input-field-style', 1000);
// // Input in Search bar
// element(by.css(".height-71px .col-span-1:nth-child(2) .grouped-input .input-field-style")).sendKeys("Gym ball");
// browser.sleep(2000);
 
// // Click on cross icon in search bar
// element(by.css(".cross-container .link-button .width-13px")).click();
// browser.sleep(1000);
 
 
// // Click in all categories of search bar
// element(by.css('ng-select[placeholder="All Categories"]')).click();
// browser.sleep(2000);
 
// // Select 3 rd value from all categories
// element(by.css(".ng-dropdown-panel-items .ng-option:nth-child(3)")).click();
// browser.sleep(1000);
 
// // Click on search icon in search bar
// element(by.css(".cross-container .link-button .width-17px")).click();
// browser.sleep(1000);
 
// // Trending>>Saved later icon
// element(by.css(".pd-25px .swiper:nth-child(1) .swiper-slide:nth-child(3) .display-grid .link-button")).click();
// browser.sleep(2000);



    });
}); 