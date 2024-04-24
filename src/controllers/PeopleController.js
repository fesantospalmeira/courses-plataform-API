const Controller = require('./Controller.js');
const PeopleService = require('../services/PeopleService.js');

const peopleService = new PeopleService();

class PeopleController extends Controller {
    constructor(){
        super(peopleService);
    }

    async getAllRegistrations (req, res){
      const { studant_id } = req.params
       try{
        const registrationList = await peopleService.getAllRegistrationsByStudants(Number(studant_id));
        return res.status(200).json(registrationList);

       }catch(erro){

       }
    }
  }
  
module.exports = PeopleController;