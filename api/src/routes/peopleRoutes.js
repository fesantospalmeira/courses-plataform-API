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
router.put('/people/:studant_id/cancel', (req, res)=> peopleController.cancelRegisterStudant(req, res));

router.delete('/people/:id', (req, res)=> peopleController.delete(req, res));

router.get('/people/:studant_id/registrations', (req, res)=> peopleController.getRegistrationsAtives(req, res));
router.get('/people/:studant_id/registrations/all', (req, res)=> peopleController.getAllRegistrations(req, res));
router.get('/people/:studant_id/registrations/confirmed', (req, res)=> registrationController.getEnrollsByStudant(req, res));
router.get('/people/registrations/crowded', (req, res)=> registrationController.getCoursesCrowded(req, res));
router.get('/people/:studant_id/registrations/:id', (req, res)=> registrationController.getOne(req, res));

router.post('/people/:studant_id/registrations', (req, res)=> registrationController.createNew(req, res));

router.put('/people/:studant_id/registrations/:id', (req, res)=> registrationController.update(req, res));

router.delete('/people/:studant_id/registrations/:id', (req, res)=> registrationController.delete(req, res));


module.exports = router;
