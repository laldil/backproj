const express = require('express')
const ejs = require('ejs')
const app = express();
const PORT = 3000;

app.set('view engine', ejs)
app.use(express.static('public'))

app.use('/', require('./routes/indexRouter'))
app.use('/home', require('./routes/homeRouter'))
app.use('/restaurants', require('./routes/restaurantsRouter'))
app.use('/sign', require('./routes/signRouter'))

app.listen(PORT, () =>
    console.log(`App listening at localhost: ${PORT}`)
);
