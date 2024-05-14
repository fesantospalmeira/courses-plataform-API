const dataSource = require('../database/models');

class Services {
    constructor(modelName) {
        this.model = modelName;
    }

    async getAllRegisters(where = {}) {
        return dataSource[this.model].findAll({ where: { ...where } });
    }

    async getRegistersByScope(scope) {
        return dataSource[this.model].scope(scope).findAll();
    }

    async getOneRegisterById(id) {
        return dataSource[this.model].findByPk(id);
    }
    async getOneRegister(where) {
        return dataSource[this.model].findOne({ where: { ...where } });
    }

    async getAndCountRegisters(options) {
        return dataSource[this.model].findAndCountAll({ ...options });
    }

    async createRegister(dataForCreation) {
        return dataSource[this.model].create(dataForCreation);
    }

    async updateRegister(dataUpdated, where, t = {}) {
        const listRegisterUpdated = await dataSource[this.model]
            .update(dataUpdated, {
                where: { ...where },
                transaction: t,
            });
        if (listRegisterUpdated[0] === 0) {
            return false;
        }
        return true;
    }

    async deleteRegister(id) {
        return dataSource[this.model].destroy({ where: { id: id } });
    }
}

module.exports = Services;