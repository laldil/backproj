const express = require('express')
const app = express();
const PORT = 3000;

app.use(express.static('public'))

app.use('/', require('./routes/indexRouter'))
app.use('/home', require('./routes/homeRouter'))
app.use('/restaurants', require('./routes/restaurantsRouter'))

app.listen(PORT, () =>
    console.log(`App listening at localhost: ${PORT}`)
);
