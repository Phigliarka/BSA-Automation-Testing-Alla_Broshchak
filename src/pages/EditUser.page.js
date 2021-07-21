const { Input, Button } = require('../elements');


class EditUserPage {
    constructor(){
        this.NameField = new Input ('input[placeholder="Name"]');
        this.SurnameField = new Input ('input[placeholder="Surname"]');
        this.ButtonEditProfile = new Button ("//form[@class='styles_editForm__1rOFS']/div/button[contains(text(), 'Edit')]");
                               
    }

    async  EditUserData({name, surName}){
        await this.NameField.setValue(name);
        await this.SurnameField.setValue(surName);
        await this.ButtonEditProfile.click();
                
    }   
    
    

}
module.exports = {EditUserPage};