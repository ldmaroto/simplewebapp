const express = require('express');
const router = express.Router();

router.get('/users/sing-in', (req, res) => {
    //res.send('Ingresando a la app');
    res.render('users/sing-in')
})

router.get('/users/sing-up', (req, res) => {
    //res.send('Formulario de autenticación');
    res.render('users/sing-up')
})

module.exports = router;