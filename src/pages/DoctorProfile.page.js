const { Input, Button, Link } = require('../elements');


class doctorProfilePage {
    constructor(){
        this.LinkMyProfile = new Link ("//div[@class='header_pagesSection__2Rgck']/a[contains(text(), 'My Profile')]");
        this.buttonEdit = new Button ("//div[@class='styles_infoHeader__Ej0xQ']/button[@class=@class='styles_btn___s1BB']");
    }

    async  goToMyProfilePage(){
        await this.LinkMyProfile.click();
        await this.buttonEdit.click();
    }  
    
    
}
module.exports = {doctorProfilePage};