const dataSource = require('../database/models');

class Services {
    constructor(modelName) {
        this.model = modelName;
    }

    async getAllRegisters() {
        return dataSource[this.model].findAll();
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

    async createRegister(dataForCreation) {
        return dataSource[this.model].create(dataForCreation);
    }

    async updateRegister(dataUpdated, where) {
        const listRegisterUpdated = dataSource[this.model].update(dataUpdated, {
            where: { ...where }
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