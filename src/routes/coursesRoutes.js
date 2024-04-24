const { Router } =  require('express');
const CourseController = require('../controllers/CourseController.js');

const coursesRoutes = new CourseController();

const router = Router();

router.get('/courses', (req, res)=> coursesRoutes.getAll(req, res));
router.get('/courses/:id', (req, res)=> coursesRoutes.getOneById(req, res));

router.post('/courses', (req, res)=> coursesRoutes.createNew(req, res));

router.put('/courses/:id', (req, res)=> coursesRoutes.update(req, res));

router.delete('/courses/:id', (req, res)=> coursesRoutes.update(req, res));

module.exports = router;
