const { Input, Button } = require('../elements');

class LoginPage {
    constructor(){
        this.userEmailField = new Input ('input[name="email"]');
        this.passwordField = new Input('input[name="password"]');
        this.signInButton = new Button('button');
    }

    async LogIn({email, password}) {
        await this.userEmailField.setValue(email);
        await this.passwordField.setValue(password);
        await this.signInButton.click();
    }   

}
module.exports = {LoginPage};
