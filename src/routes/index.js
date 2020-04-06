const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // res.send('Index');
    res.render('index');
})

router.get('/about', (req, res) => {
    // res.send('About');
    res.render('about')
})

module.exports = router;