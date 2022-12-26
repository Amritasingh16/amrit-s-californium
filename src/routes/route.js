const express = require('express');
const router = express.Router()
const myController= require("../controllers/myController")
const myMW= require("../middlewares/myMW")






//=================================23-12-2022==========================
router.post("/createUser",myMW.midware1,myController.createUser)
router.post("/createOrder",myMW.midware1,myController.createOrder)
//router.get("/getOrder",myMW.midware2,myController.getOrder)
 router.post("/createProduct", myController.createProduct)




module.exports = router;