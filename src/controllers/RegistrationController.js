const Controller = require('./Controller.js');
const RegistrationService = require('../services/RegistrationService.js');

const registrationService = new RegistrationService();

class RegistrationController extends Controller {
    constructor(){
        super(registrationService);
    }
  }
  
module.exports = RegistrationController;