const Services = require('./Services.js');

class PeopleService extends Services{
    constructor(){
        super('People');
    }
    async getAllRegistrationsByStudants(id) {
        const studant = await super.getOneRegisterById(id);
        const listaMatricula = await studant.getEnrolledClasses();
        return listaMatricula;
    }
}

module.exports = PeopleService;