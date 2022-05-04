const dishesModel = require('../models/dishesModel')
const sideDishesModel = require('../models/sideDishesModel')

class dishesController{
    async addDishes(req,res){
        try{
            const dishes = new dishesModel({
                title: req.body.dishesTitle,
                price: req.body.dishesPrice,
                img: req.body.dishesImg
            })
            await dishes.save()
            res.redirect('/admin')
        } catch (e){
            console.log(e)
        }
    }
    async addSideDishes(req,res){
        try{
            const sideDishes = new sideDishesModel({
                title: req.body.sideDishesTitle,
                price: req.body.sideDishesPrice,
                img: req.body.sideDishesImg
            })
            await sideDishes.save()
            res.redirect('/admin')
        } catch (e){
            console.log(e)
        }
    }
}

module.exports = new dishesController()