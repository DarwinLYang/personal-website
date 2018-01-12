var express = require('express')
var router = express.Router()
var bodyParser = require('body-parser')

// router.get('/', function(req, res){
//     res.render('index')
// });

// router.get('/capstone', function(req, res){
//     res.render('capstone')
// });

router.get('/', function(req, res){
    res.render('index', {page: 'home'})
});

router.get('/capstone', function(req, res){
    res.render('index', {page: 'capstone'})
});

module.exports = router;
