const {Schema, model} = require('mongoose')

const pasta = new Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    img:{
        type: String,
        required: true
    }
})

module.exports = model('Pasta', pasta)