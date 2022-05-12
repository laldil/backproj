const express = require('express')
const mongoose = require('mongoose')
const ejs = require('ejs')
const Process = require("process");
const app = express()
const PORT = 3000

app.set('view engine', ejs)
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/', require('./routes/indexRouter'))
app.use('/home', require('./routes/homeRouter'))
app.use('/restaurants', require('./routes/restaurantsRouter'))
app.use('/sign', require('./routes/signRouter'))
app.use('/admin', require('./routes/adminRouter'))

const start = async () => {
    try {
        await mongoose.connect('mongodb+srv://aldi:7777@cluster0.duwns.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
        app.listen(process.env.PORT || PORT, () =>
            console.log(`App listening at localhost: ${PORT}`)
        )
    } catch (e){
        console.log(e)
    }
}

start()