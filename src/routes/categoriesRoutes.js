const { Router } =  require('express');
const CategoriesController = require('../controllers/CategoryCotroller');

const categoriesRoutes = new CategoriesController();

const router = Router();

router.get('/category', (req, res)=> categoriesRoutes.getAll(req, res));
router.get('/category/:id', (req, res)=> categoriesRoutes.getOneById(req, res));

router.post('/category', (req, res)=> categoriesRoutes.createNew(req, res));

router.put('/category/:id', (req, res)=> categoriesRoutes.update(req, res));

router.delete('/category/:id', (req, res)=> categoriesRoutes.update(req, res));

module.exports = router;
