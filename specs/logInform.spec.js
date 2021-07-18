const { expect } = require('chai');


describe('LogIn:', function () {

    it('should be able to login', async function () {
  
      await browser.setWindowSize(1440, 960);
      await browser.url('/sign-in');
  
      const userEmailField = await $('input[name="email"]');
      const passwordField = await $('input[name="password"]');
      const signInButton = await $('button');
  
      await userEmailField.waitForDisplayed({ timeout: 15000 });
      await userEmailField.setValue(`marcus1@gmail.com`);
  
      await passwordField.waitForDisplayed({ timeout: 15000 });
      await passwordField.setValue('Pa55word');
  
      await signInButton.waitForDisplayed({ timeout: 15000 });
      await signInButton.click();
  
      await browser.waitUntil(
        async function () {
          const url = await browser.getUrl();
          return url === 'http://46.101.234.121/doctors';
        },
        { timeout: 15000 },
      );
  
      const url = await browser.getUrl();
      expect(url).to.be.eql('http://46.101.234.121/doctors');
      
      await browser.reloadSession();
    });
  
    it('should not be able to login with invalid data', async function () {
  
      await browser.setWindowSize(1440, 960);
      await browser.url('/sign-in');
  
      const userEmailField = await $('input[name="email"]');
      const passwordField = await $('input[name="password"]');
      const signInButton = await $('button');
  
      await userEmailField.waitForDisplayed({ timeout: 5000 });
      await userEmailField.setValue(`marcus@gmail.com`);
  
      await passwordField.waitForDisplayed({ timeout: 5000 });
      await passwordField.setValue('Paword');
  
      await signInButton.waitForDisplayed({ timeout: 5000 });
      await signInButton.click();
  
      await browser.pause(5000);
  
        
      const errorMessage = await $('div[class="rrt-title"]');
      expect(errorMessage).to.equal(errorMessage);
  
      await browser.reloadSession();
    });
  
  
  });
  