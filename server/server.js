require('dotenv').config()

const express = require('express')
const router = require('./routes/routes.js')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()
const mongoose = require('mongoose')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '../client'))
app.use(express.static(path.join(__dirname, '../client')))
app.use(bodyParser.json({limit: '50mb'}))
app.use(bodyParser.urlencoded({limit: '50mb', extended: false}))


var db_uri = 'mongodb://' + process.env.DBUSERNAME + ':' + process.env.DBPASSWORD + '@ds251217.mlab.com:51217/darwin-yang'

var promise = mongoose.connect(db_uri, {
    useMongoClient: true,
})

app.use('/', router)

module.exports = app
