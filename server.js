const express = require('express')
const app = express();
const PORT = 3000;

app.use('/', require('./routes/indexRouter'))
app.use('/home', require('./routes/homeRouter'))
app.use('/restaurants', require('./routes/restaurantsRouter'))


// ______________________________________________
// app.get('/', ((req,res) => {
//     res.sendFile(__dirname+'/index.html')
// }))
// app.get('/home', ((req,res) => {
//     res.sendFile(__dirname+'/home.html')
// }))
// app.get('/restaurants', ((req,res) => {
//     res.sendFile(__dirname+'/restaurants.html')
// }))
app.listen(PORT, () =>
    console.log(`App listening at localhost: ${PORT}`)
);
