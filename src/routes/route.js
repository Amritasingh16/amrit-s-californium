const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const myUserCollection= require("../controllers/myUserController")
const myMW= require("../middleware/myUserMW")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser)

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId", userController.getUserData)
router.post("/users/:userId/posts", userController.postMessage)

router.put("/users/:userId", userController.updateUser)
//router.delete('/users/:userId', userController.deleteUser)

//=======================27-12-2022 ASSIGNMENT====================

  router.post("/myUsers",myUserCollection.myUsers )
  router.post("/myLogins", myUserCollection.myLogins)
  router.put("/modifyUser/:users/myPost" ,myMW.myMW,myMW.validation,myUserCollection.modifyUser)
  router.get("/getmyUsers/:users",myMW.myMW,myMW.validation, myUserCollection.getmyUsers)
  router.put("/updateMyUsers/:users",myMW.myMW, myUserCollection.updateMyUsers)
  router.delete("/deleteMyUsers/:users", myMW.myMW,myUserCollection.deleteMyUsers)

module.exports = router;