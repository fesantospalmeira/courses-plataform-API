const { Router } =  require('express');
const PeopleController = require('../controllers/PeopleController.js');

const peopleController = new PeopleController();

const router = Router();

router.get('/people', (req, res)=> peopleController.getAll(req, res));
router.get('/people/:id', (req, res)=> peopleController.getOneById(req, res));

router.post('/people', (req, res)=> peopleController.createNew(req, res));

router.put('/people/:id', (req, res)=> peopleController.update(req, res));

router.delete('/people/:id', (req, res)=> peopleController.update(req, res));

module.exports = router;
