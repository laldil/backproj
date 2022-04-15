const express = require('express')
const router = express.Router()

router
    .route('/')
    .get((req,res) => res.sendFile('C:\\Users\\aldia\\Desktop\\project 1\\backproj\\home.html'))

module.exports = router