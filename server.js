const express = require('express')
const http = require('http')
const ejs = require('ejs')
const app = express();
const PORT = 3000;

app.set('view engine', ejs)
app.use(express.static('public'))

app.use('/', require('./routes/indexRouter'))
app.use('/home', require('./routes/homeRouter'))
app.use('/restaurants', require('./routes/restaurantsRouter'))
app.use('/sign', require('./routes/signRouter'))

// const KEY = '7660472a37590471718968e51dc9710d'
// let url = 'http://api.exchangeratesapi.io/v1/latest?access_key='+ KEY +'&symbols=USD,KZT'
// http.get(url, function (response){
//     response.on('data', data => {
//         let currency = JSON.parse(data)
//         let usd = currency.rates.USD
//         let kzt = currency.rates.KZT
//         console.log(currency)
//     })
// })

app.listen(PORT, () =>
    console.log(`App listening at localhost: ${PORT}`)
);
