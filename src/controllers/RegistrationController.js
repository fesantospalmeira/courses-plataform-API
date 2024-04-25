const Sequelize = require('sequelize');
const Controller = require('./Controller.js');
const RegistrationService = require('../services/RegistrationService.js');

const registrationService = new RegistrationService();

class RegistrationController extends Controller {
  constructor() {
    super(registrationService);
  }

  async getEnrollsByStudant(req, res) {
    const { studant_id } = req.params;
    try {
      const listEnrollsByStudant = await registrationService.getAndCountRegisters({
        where: {
          studant_id: Number(studant_id),
          status: 'matriculado'
        },
        limit: 2,
        order: [['id', 'ASC']],
      });
      return res.status(200).json(listEnrollsByStudant);

    } catch (erro) {
      return res.status(500).json({ erro: erro.message });
    }
  }

  async getCoursesCrowded(req, res) {
    const coursesFull = 1;
    try {
      const coursesCrowded = await registrationService.getAndCountRegisters({
        where: {
          status: 'matriculado'
        },
        attributes:['course_id'],
        group: ['course_id'],
        having: Sequelize.literal(`count(course_id) >= ${coursesFull}`)
      });
      return res.status(200).json(coursesCrowded.count);
    } catch (erro) {
      return res.status(500).json({ erro: erro.message });
    }
  }
}

module.exports = RegistrationController;