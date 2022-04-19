const express = require('express')
const router = express.Router()
const path = require('path')

router
    .route('/')
    .get((req,res) => res.render(path.resolve('views/index.ejs'),
        {title: 'Menu', activePage: 'index'}))

module.exports = router