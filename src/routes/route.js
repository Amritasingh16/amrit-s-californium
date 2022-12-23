const express = require('express');
const router = express.Router();
const amritacontroller= require('../controllers/amritacontroller')

// const authorController= require("../controllers/authorController")
// const bookController= require("../controllers/bookController")
//
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


// 21-12-2022---------------------------

// router.post("/createAuthor", amritacontroller.createAuthor  )
// router.post("/createBook", amritacontroller.createBook  )
// router.post("/createPublisher",amritacontroller.createPublisher)
// router.get("/getBookDetails", amritacontroller.getBookDetails)
// router.put("/getupdate", amritacontroller.getupdate)
// router.put("/getauthors",amritacontroller.getauthors)

// router.get("/getAuthorsData", myController.getAuthorsData)
// router.get("/getBooksData", myController.getBooksData)
// router.get("/getBooksWithAuthorDetails", myController.getBooksWithAuthorDetails)

module.exports = router;