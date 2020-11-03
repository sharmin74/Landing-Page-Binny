const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const data = require('./tourContent');

router.get('/', (req, res) => {
    res.render('home');
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/tour', (req, res) => {
    res.render('tour');
});

router.get('/food-services', (req, res) => {
    res.render('foodServices');
});

router.get('/spa', (req, res) => {
    res.render('spa');
});

router.get('/contact-us', (req, res) => {
    res.render('contact');
});

router.get('/tour/:nameOfPlace', (req, res) => {
    const place = req.params.nameOfPlace;
    var obj = {}
    data.forEach((each) => {
        const userPlace = each.id;
        if (place === userPlace) {
            const name = each.name;
            const info = each.info;
            const src = each.src;
            obj.name = name;
            obj.info = info;
            obj.src = src;
            // return res.render('eachTourPlace', { name: name, info: info });
        }
    })
    console.log(obj);
    res.render('eachTourPlace', { name: obj.name, info: obj.info, src: obj.src });
});

module.exports = router;