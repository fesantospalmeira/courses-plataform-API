const { Router } =  require('express');
const PeopleController = require('../controllers/PeopleController.js');
const RegistrationController = require('../controllers/RegistrationController.js');

const peopleController = new PeopleController();
const registrationController = new RegistrationController();

const router = Router();

router.get('/people', (req, res)=> peopleController.getAll(req, res));
router.get('/people/all', (req, res)=> peopleController.getAllPeople(req, res));
router.get('/people/:id', (req, res)=> peopleController.getOneById(req, res));


router.post('/people', (req, res)=> peopleController.createNew(req, res));


router.put('/people/:id', (req, res)=> peopleController.update(req, res));

router.delete('/people/:id', (req, res)=> peopleController.delete(req, res));

router.get('/people/:studant_id/registration', (req, res)=> peopleController.getAllRegistrations(req, res));
router.post('/people/:studant_id/registration', (req, res)=> registrationController.createNew(req, res));

module.exports = router;
