const { AuthPage } = require('./auth.page');
const { doctorProfilePage } = require('./DoctorProfile.page');
const {LoginPage} = require('./Login.page');
const {EditUserPage} = require('./EditUser.page');


class App {
  constructor() {
    this.authPage = new AuthPage();
  }
}
class Login{
  constructor(){
    this.LoginPage = new LoginPage();
  }
}
class DocProfile{
  constructor(){
    this.DoctorProfile = new doctorProfilePage();
  }
}
class EditUser{
  constructor(){
    this.EditUserPage = new EditUserPage();
  }
}


module.exports = { 
  App, 
  Login,
  DocProfile,
  EditUser 
};

