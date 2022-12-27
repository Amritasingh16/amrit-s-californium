const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const myUserCollection= require("../controllers/myuserController")
const myMW= require("../middleware/myMiddleware")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser  )
router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId", userController.getUserData)
router.put("/users/:userId", userController.updateUser)

//====================26/12/2022========================
  router.post("/myUsers",myUserCollection.myUsers )
  router.post("/myLogins", myUserCollection.myLogins)
  router.get("/getmyUsers/:users",myMW.myMW, myUserCollection.getmyUsers)
  router.put("/updateMyUsers/:users",myMW.myMW, myUserCollection.updateMyUsers)
  router.delete("/deleteMyUsers/:users", myMW.myMW,myUserCollection.deleteMyUsers)


module.exports = router;