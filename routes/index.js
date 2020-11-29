const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const data = require('./tourContent');
const emailjs = require('emailjs-com');


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

router.post('/contact-us', (req, res) => {
    // const name = req.body.name
    // const email = req.body.email
    // const phoneno = req.body.phoneno
    // const message = req.body.message
    // const hotel = req.body.hotel

    var templateParams = {
        name: 'James',
        email: 'love@gmail.com',
        phone: '8895794875',
        message: 'skfjakjskfjalkfjkajkjkaj kj kajkj kj jkdjkjf jkfijknw n jkajkj'
    };
     
    emailjs.send('service_e6j9eho', 'template_m7cz7x6', templateParams)
        .then(function(response) {
           console.log('SUCCESS!');
        }, function(error) {
           console.log('FAILED...');
        });


   
})

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
    res.render('eachTourPlace', { name: obj.name, info: obj.info, src: obj.src });
});

module.exports = router;