const Controller = require('./Controller.js');
const PeopleService = require('../services/PeopleService.js');

const peopleService = new PeopleService();

class PeopleController extends Controller {
  constructor() {
    super(peopleService);
  }

  async getRegistrationsAtives(req, res) {
    const { studant_id } = req.params
    try {
      const registrationList = await peopleService.getAllRegistrationsAtivesByStudants(Number(studant_id));
      return res.status(200).json(registrationList);

    } catch (erro) {
      return res.status(500).json({ erro: erro.message });
    }
  }
  async getAllRegistrations(req, res) {
    const { studant_id } = req.params
    try {
      const registrationList = await peopleService.getAllRegistrationsByStudants(Number(studant_id));
      return res.status(200).json(registrationList);

    } catch (erro) {
      return res.status(500).json({ erro: erro.message });
    }
  }

  async getAllPeople(req, res){
    try{
      const listAllPeople = await peopleService.getPeopleScopeAll();
      return res.status(200).json(listAllPeople);
    } catch(erro){
      return res.status(500).json({ erro: erro.message });
    }
  }
}

module.exports = PeopleController;