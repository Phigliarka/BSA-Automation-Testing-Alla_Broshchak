const { Input, Button, Link } = require('../elements');


class doctorProfilePage {
    constructor(){
        this.LinkMyProfile = new Link ("//div[@class='header_pagesSection__2Rgck']/a[contains(text(), 'My Profile')]");
        this.buttonEdit = new Button ("//div[@class='styles_infoHeader__Ej0xQ']/button[@class=@class='styles_btn___s1BB']");
        this.specialtyDdl = new Button('div.selectStyles', 0);
        this.clinicDdl = new Button('div.selectStyles', 1);
        this.ddlOption = new Button('div.selectStyles__option=TEXT_TO_REPLACE');
        this.buttonSaveSpeciality = new Button("//form[@class='styles_selectFormWrapper__vOryy']/div[@class='styles_selectSubmitWrapper__1xyQL']/button[@class='styles_btn___s1BB styles_without-border__3Vbp3 styles_primary-dark__1WnyR']");
        this.buttonSaveClinic = new Button("//form[@class='styles_selectFormWrapper__1UXSB']/div[@class='styles_selectSubmitWrapper__1VXHA']/button[@class='styles_btn___s1BB styles_without-border__3Vbp3 styles_primary-dark__1WnyR']");
    }

    async  goToEditUserPage(){
        await this.LinkMyProfile.click();
        await this.buttonEdit.click();
    } 
    
    async goToMyProfilePage(){
        await this.LinkMyProfile.click();
    }

    
    async EditSpecialityAndClinic({ clinic, speciality}) {
        await this.specialtyDdl.click();
        await this.ddlOption.clickByText(speciality);

        await this.specialtyDdl.click();
        await this.ddlOption.clickByText(clinic);

        await this.buttonSaveSpeciality.clic();
        await this.buttonSaveClinic.clic();
    }


}

module.exports = {doctorProfilePage};