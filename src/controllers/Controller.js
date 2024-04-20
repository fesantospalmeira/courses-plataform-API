class Controller {
    constructor(entityService) {
        this.entityService = entityService;
    }

    async getAll(req, res) {
        try {
            const registerList = await this.entityService.getAllRegisters();
            return res.status(200).json(registerList);
        } catch (erro) {
            return res.status(400).json({ message: 'deu ruim' });
        }
    }
    async getOneById(req, res) {
        const { id } = req.params;
        try {
            const oneRegister = await this.entityService.getOneRegisterById(Number(id));
            return res.status(200).json(oneRegister);
        } catch (erro) {
            return res.status(400).json({ message: 'deu ruim' });
        }
    }
    async createNew(req, res) {
        const dataForCreation = req.body;
        try {
            const newRegisterCreated = await this.entidadeService.createRegister(dataForCreation);
            return res.status(200).json(newRegisterCreated);
        } catch (erro) {
            return res.status(400).json({ message: 'deu ruim' });
        }
    }

    async update(req, res) {
        const { id } = req.params;
        const dataUpdated = req.body;
        try {
            const isUpdated = await this.entityService.updateRegister(dataUpdated, Number(id))
            if (!isUpdated) {
                return res.status(400).json({ message: "The register is not updated" });
            }
            return res.status(200).json({ message: `id ${id} updated sucessfully!` });
        } catch (erro) {
            return res.status(400).json({ message: 'deu ruim' });
        }
    }

    async delete(req, res) {
        const { id } = req.params;
        try {
            await this.entityService.deleteRegister(Number(id));
            return res.status(200).json({ mensagem: `id ${id} deletado` });


        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

}

module.exports = Controller;