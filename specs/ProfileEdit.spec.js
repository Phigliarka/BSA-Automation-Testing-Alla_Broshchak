const { expect } = require('chai');
const rundomNumber = () => Date.now();

const  {Login} = require('../src/pages');
const  {DocProfile} = require('../src/pages');
const  {EditUser} = require('../src/pages');

const logIn = new Login();
const docProfile = new DocProfile();
const editUser = new EditUser();


describe('Edit Profile', function () {

    beforeEach(async function () {
        await browser.setWindowSize(1440, 960);
        await browser.url('/sign-in');

        await logIn.LoginPage.LogIn({
            email: 'marcus1@gmail.com',
            password: 'Pa55word',
        });
    });

    afterEach(async function () {
        await browser.reloadSession();
      });

    it('should be able to edit user profile', async function () {

        

        await docProfile.DoctorProfile.goToEditUserPage();

        const fName = `Frodo${rundomNumber()}`;
        const lName = `Beggins${rundomNumber()}`;

        await editUser.EditUserPage.EditUserData({
            name: fName,
            surName: lName
        })
                        
        await browser.pause(5000);

        const NexDataName = await $("//div[@class='styles_mainUserInfo__3FD2X']/span[@class='styles_name__2vTNE']");
        const NewText = await NexDataName.getText();
        expect(NewText).to.equal(fName+ " "+lName);

    });

    it('should be able to change clinic and spesialty in user profile', async function () {
  
        await docProfile.DoctorProfile.goToMyProfilePage();

        await docProfile.DoctorProfile.EditSpecialityAndClinic({
            clinic: 'Cleveland Clinic',
            speciality: 'Surgeon'            
        } )
    

         
        const mySpecialty = $('div[id="react-select-8-option-3"]');
        expect(mySpecialty).to.be.eql('dentist');
    
        const myClinic = $('div[id="react-select-9-option-1"]');
        expect(myClinic).to.be.eql('UCSF Medical Center');

        

    });

});
