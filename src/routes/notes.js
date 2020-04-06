const express = require('express');
const router = express.Router();

router.get('/notes/add-note', (req, res) => {
    res.render('notes/add-note');
});


router.get('/notes', (req, res) => {
    res.send('Notes');
})

module.exports = router;