// const { expect } = require('chai');
// const  {Login} = require('../src/pages');

// const logIn = new Login();


// describe('LogIn:', function () {

//     beforeEach(async function () {
//         await browser.setWindowSize(1440, 960);
//         await browser.url('/sign-in');
//     });

//     afterEach(async function () {
//         await browser.reloadSession();
//       });


//     it('should be able to login', async function () {
        
//         await logIn.LoginPage.LogIn({
//             email: 'marcus1@gmail.com',
//             password: 'Pa55word',
//         });
//         await browser.waitUntil(
//             async function () {
//               const url = await browser.getUrl();
//               return url === 'http://46.101.234.121/doctors';
//             },
//             { timeout: 15000 },
//           );

//         const url = await browser.getUrl();
//         expect(url).to.be.eql('http://46.101.234.121/doctors');

          
//     });
  
//     it('should not be able to login with invalid data', async function () {

//         await logIn.LoginPage.LogIn({
//             email: 'marcus1@gmail.com',
//             password: 'PPaword',
//         });
  
       
//       const errorMessage = await $('div[class="rrt-title"]');
//       await errorMessage.waitForDisplayed({ timeout: 5000 });
//       expect(errorMessage).to.equal(errorMessage);
  
     
//     });
  
  
//   });
  