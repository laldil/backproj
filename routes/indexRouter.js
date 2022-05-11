const express = require('express')
const router = express.Router()
const path = require('path')
const http = require('http')
const hamburgerModel = require('../models/hamburgerModel')
const pizzaModel = require('../models/pizzaModel')
const sushiModel = require('../models/sushiModel')
const saladModel = require('../models/saladModel')
const soupModel = require('../models/soupModel')


let currency
const KEY = '7660472a37590471718968e51dc9710d'
let url = 'http://api.exchangeratesapi.io/v1/latest?access_key='+ KEY +'&symbols=USD,KZT'
http.get(url, function (response){
    response.on('data', data => {
        currency = JSON.parse(data)
    })
})

router
    .route('/')
    .get(async (req,res) => {
        res.render(path.resolve('views/index.ejs'),
        {
            title: 'Menu',
            activePage: 'index',
            priceUSD:currency.rates.USD,
            priceKZT:currency.rates.KZT,
            hamburger: await hamburgerModel.find(),
            pizza: await pizzaModel.find(),
            sushi: await sushiModel.find(),
            salad: await saladModel.find(),
            soup: await soupModel.find(),
        })
    })


module.exports = router