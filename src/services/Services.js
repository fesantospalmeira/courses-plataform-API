const dataSource = require('../database/models');

class Services {
    constructor(modelName){
        this.model = modelName;
    }

    async getAllRegisters(){
        return dataSource[this.model].findAll();
    }
    
    async getOneRegisterById(id){
        return dataSource[this.model].findByPk(id);
    }

    async createRegister(dataForCreation){
        return dataSource[this.model].create(dataForCreation);
    }

    async updateRegister(dataUpdated, id){
        const listRegisterUpdated = dataSource[this.model].update(dataUpdated, {
            where: { id }
        });
        if(listRegisterUpdated[0] ===0 ){
            return false;
        }
        return true;
    }

    async deleteRegister(id){
        return dataSource[this.model].destroy({ where: { id: id } });
    }
}

module.exports = Services;