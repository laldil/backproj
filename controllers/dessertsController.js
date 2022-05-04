const cakesModel = require('../models/cakesModel')

class dessertsController{
    async addCakes(req,res){
        try{
            const cakes = new cakesModel({
                title: req.body.cakesTitle,
                price: req.body.cakesPrice,
                img: req.body.cakesImg
            })
            await cakes.save()
            res.redirect('/admin')
        } catch (e){
            console.log(e)
        }
    }
}

module.exports = new dessertsController()