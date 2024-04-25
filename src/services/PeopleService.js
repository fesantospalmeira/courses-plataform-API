const dataSource = require('../database/models');
const Services = require('./Services.js');

class PeopleService extends Services {
    constructor() {
        super('People');
        this.registerServices = new Services('Registration')
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

    async getPeopleScopeAll() {
        const listPeople = await super.getRegistersByScope('allRegisters');
        return listPeople;
    }

    async cancelPeopleAndEnrolls(studant_id) {
        return dataSource.sequelize.transaction(async (transaction) => {
            await super.updateRegister({ ativo: false }, { id: studant_id }, transaction);
            await this.registerServices.updateRegister({ status: 'cancelado' }, { studant_id: studant_id }, transaction);
        })
    }
}

module.exports = PeopleService;