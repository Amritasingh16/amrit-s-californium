const express = require('express');
const router = express.Router();
const controller= require("../controller/controller")

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});
//17-12-2022--------------
router.post('/createBook',controller.createBook2)
router.get('/bookList', controller.mybooklist)
router.get('/getBooksInYear/:year', controller.getBooksbyYear)
router.get('/getParticularBooks', controller.getpbook)
router.get('/getXINRBooks', controller.getX)
router.get('/getRandomBooks', controller.getRbook)

module.exports = router;