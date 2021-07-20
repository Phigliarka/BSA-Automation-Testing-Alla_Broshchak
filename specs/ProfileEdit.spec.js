const { expect } = require('chai');
const rundomNumber = () => Date.now();

describe('Edit Profile', function () {

    xit('should be able to edit user profile', async function () {
  
        await browser.setWindowSize(1440, 960);
        await browser.url('/sign-in');
    
        const userEmailField = await $('input[name="email"]');
        const passwordField = await $('input[name="password"]');
        const signInButton = await $('button');
        const LinkMyProfile = await $("//div[@class='header_pagesSection__2Rgck']/a[contains(text(), 'My Profile')]");
        const buttonEdit = await $("//div[@class='styles_infoHeader__Ej0xQ']/button[@class=@class='styles_btn___s1BB']");
        const NameField = await $('input[placeholder="Name"]');
        const SurnameField = await $('input[placeholder="Surname"]');
        const ButtonEditProfile = await $("//form[@class='styles_editForm__1rOFS']/div/button[contains(text(), 'Edit')]");

    
        await userEmailField.waitForDisplayed({ timeout: 5000 });
        await userEmailField.setValue(`marcus1@gmail.com`);
    
        await passwordField.waitForDisplayed({ timeout: 5000 });
        await passwordField.setValue('Pa55word');
    
        await signInButton.waitForDisplayed({ timeout: 5000 });
        await signInButton.click();
           

        await LinkMyProfile.waitForDisplayed({ timeout: 5000 });
        await LinkMyProfile.click();

        await browser.pause(5000);

        await buttonEdit.waitForDisplayed({ timeout: 5000 });
        await buttonEdit.click();

        const fName = `Frodo${rundomNumber()}`;
        const lName = `Beggins${rundomNumber()}`;


        await NameField.waitForDisplayed({ timeout: 5000 });
        await NameField.setValue(fName);

        await SurnameField.waitForDisplayed({ timeout: 5000 });
        await SurnameField.setValue(lName);

        await ButtonEditProfile.waitForDisplayed({ timeout: 5000 });
        await ButtonEditProfile.click();



        await browser.pause(5000);

        const NexDataName = await $("//div[@class='styles_mainUserInfo__3FD2X']/span[@class='styles_name__2vTNE']");
        const NewText = await NexDataName.getText();
        expect(NewText).to.equal(fName+ " "+lName);

        

        await browser.reloadSession();      




    });

    it('should be able to edit to change clinic and spesialty in user profile', async function () {
  
        await browser.setWindowSize(1440, 960);
        await browser.url('/sign-in');
    
        const userEmailField = await $('input[name="email"]');
        const passwordField = await $('input[name="password"]');
        const signInButton = await $('button');
        const LinkMyProfile = await $("//div[@class='header_pagesSection__2Rgck']/a[contains(text(), 'My Profile')]");
        const spesialty = await $("//form[@class='styles_selectFormWrapper__vOryy']//div[@class='selectStyles css-2b097c-container']/div[@class='selectStyles__control css-6h7vey-control']");
        const clinic = await $("//form[@class='styles_selectFormWrapper__1UXSB']//div[@class='selectStyles css-2b097c-container']/div[@class='selectStyles__control css-6h7vey-control']")

    
        await userEmailField.waitForDisplayed({ timeout: 5000 });
        await userEmailField.setValue(`marcus1@gmail.com`);
    
        await passwordField.waitForDisplayed({ timeout: 5000 });
        await passwordField.setValue('Pa55word');
    
        await signInButton.waitForDisplayed({ timeout: 5000 });
        await signInButton.click();
           

        await LinkMyProfile.waitForDisplayed({ timeout: 5000 });
        await LinkMyProfile.click();

    });

});
