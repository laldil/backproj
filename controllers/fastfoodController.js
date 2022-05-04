const hamburgerModel = require('../models/hamburgerModel')
const pizzaModel = require('../models/pizzaModel')
const sushiModel = require('../models/sushiModel')

class fastfoodController{
    async addHamburger(req,res){
        try{
            const hamburger = new hamburgerModel({
                title: req.body.hamburgerTitle,
                price: req.body.hamburgerPrice,
                img: req.body.hamburgerImg
            })
            await hamburger.save()
            res.redirect('/admin')
        } catch (e){
            console.log(e)
        }
    }
    async addPizza(req,res){
        try{
            const pizza = new pizzaModel({
                title: req.body.pizzaTitle,
                price: req.body.pizzaPrice,
                img: req.body.pizzaImg
            })
            await pizza.save()
            res.redirect('/admin')
        } catch (e){
            console.log(e)
        }
    }
    async addSushi(req,res){
        try{
            const sushi = new sushiModel({
                title: req.body.sushiTitle,
                price: req.body.sushiPrice,
                img: req.body.sushiImg
            })
            await sushi.save()
            res.redirect('/admin')
        } catch (e){
            console.log(e)
        }
    }
}

module.exports = new fastfoodController()