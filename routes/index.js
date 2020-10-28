const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('home');
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/tour', (req, res) => {
    res.render('tour');
});

router.get('/activities', (req, res) => {
    res.render('activities');
});

router.get('/spa', (req, res) => {
    res.render('spa');
});

router.get('/contactus', (req, res) => {
    res.render('contact');
});

module.exports = router;