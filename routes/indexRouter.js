const express = require('express')
const router = express.Router()
const path = require('path')
const http = require("http");

let currency

const KEY = '7660472a37590471718968e51dc9710d'
let url = 'http://api.exchangeratesapi.io/v1/latest?access_key='+ KEY +'&symbols=USD,KZT'
http.get(url, function (response){
    response.on('data', data => {
        currency = JSON.parse(data)
        console.log(currency)
    })
})

router
    .route('/')
    .get((req,res) => res.render(path.resolve('views/index.ejs'),
        {title: 'Menu', activePage: 'index',priceUSD:currency.rates.USD, priceKZT:currency.rates.KZT}))


module.exports = router