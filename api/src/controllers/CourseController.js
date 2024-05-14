const { Op } = require('sequelize');
const Controller = require('./Controller.js');
const CourseService = require('../services/CourseService.js');

const courseService = new CourseService();

class CourseController extends Controller {
  constructor() {
    super(courseService);
  }

  async getCourses(req, res) {
    const { initial_date, final_date } = req.query;
    const where = {}
    //se existir os params, criar uma prop {}
    initial_date || final_date ? where.date_init = {} : null;
    //se existir date_init, adiciona a prop gte
    initial_date ? where.date_init[Op.gte] = initial_date : null;
    //se existir date_final, adiciona a prop lte
    final_date ? where.date_init[Op.lte] = final_date : null;

    try {
      const listCourses = await courseService.getAllRegisters(where);
      return res.status(200).json(listCourses);

    } catch (erro) {
      return res.status(500).json({ erro: erro.message });
    }
  }
}

module.exports = CourseController;
