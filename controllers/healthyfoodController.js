const saladModel = require('../models/saladModel')
const soupModel = require('../models/soupModel')
const pastaModel = require('../models/pastaModel')

class healthyfoodController{
    async addSalad(req,res){
        try{
            const salad = new saladModel({
                title: req.body.saladTitle,
                price: req.body.saladPrice,
                img: req.body.saladImg
            })
            await salad.save()
            res.redirect('/admin')
        } catch (e){
            console.log(e)
        }
    }
    async addSoup(req,res){
        try{
            const soup = new soupModel({
                title: req.body.soupTitle,
                price: req.body.soupPrice,
                img: req.body.soupImg
            })
            await soup.save()
            res.redirect('/admin')
        } catch (e){
            console.log(e)
        }
    }
    async addPasta(req,res){
        try{
            const pasta = new pastaModel({
                title: req.body.pastaTitle,
                price: req.body.pastaPrice,
                img: req.body.pastaImg
            })
            await pasta.save()
            res.redirect('/admin')
        } catch (e){
            console.log(e)
        }
    }
}

module.exports = new healthyfoodController()