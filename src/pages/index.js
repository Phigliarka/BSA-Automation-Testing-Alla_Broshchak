const { AuthPage } = require('./auth.page');
const { doctorProfilePage } = require('./DoctorProfile.page');
const {LoginPage} = require('./Login.page');
const {DoctorProfile} = require('./Login.page');

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


module.exports = { 
  App, 
  Login,
  DocProfile 
};

