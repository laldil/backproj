const express = require('express')
const router = express.Router()
const path = require('path')
const dessertsController = require('../controllers/dessertsController')
const dishesController = require('../controllers/dishesController')
const drinksController = require('../controllers/drinksController')
const fastfoodController = require('../controllers/fastfoodController')
const healthyfoodController = require('../controllers/healthyfoodController')

router
    .route('/')
    .get((req,res) => res.render(path.resolve('views/admin.ejs'),
        {title: 'Admin page', activePage: 'home'}))

router.post('/addCakes', dessertsController.addCakes)
router.post('/addDishes', dishesController.addDishes)
router.post('/addSideDishes', dishesController.addSideDishes)
router.post('/addDrinks', drinksController.addDrinks)
router.post('/addSushi', fastfoodController.addSushi)
router.post('/addPizza', fastfoodController.addPizza)
router.post('/addHamburger', fastfoodController.addHamburger)
router.post('/addSoup', healthyfoodController.addSoup)
router.post('/addSalad', healthyfoodController.addSalad)
router.post('/addPasta', healthyfoodController.addPasta)
router.post('/deleteDrinks', drinksController.deleteDrinks)

module.exports = router