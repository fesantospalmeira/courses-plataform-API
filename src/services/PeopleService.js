const Services = require('./Services.js');

class PeopleService extends Services{
    constructor(){
        super('People');
    }
    async getAllRegistrationsAtivesByStudants(id) {
        const studant = await super.getOneRegisterById(id);
        const listRegisters = await studant.getEnrolledClasses();
        return listRegisters;
    }
    async getAllRegistrationsByStudants(id) {
        const studant = await super.getOneRegisterById(id);
        const listRegisters = await studant.getAllEnrolledClasses();
        return listRegisters;
    }

    async getPeopleScopeAll(){
        const listPeople = await super.getRegistersByScope('allRegisters');
        return listPeople;
    }
}

module.exports = PeopleService;