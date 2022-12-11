const express = require('express');
const lodash = require("lodash")
const router = express.Router();
const intro = require('./introduction')
const employee = require('./employee')
const details= require('../logger/logger')
const details2= require('../helper')
const details3= require('../helper')
const details4= require('../validator/formatter')
const details5= require('../validator/formatter')


router.get('/test-me', function (req, res) {
    console.log("email from introduction module", intro.myEmail)
    intro.myFunction('Sabiha')
    console.log("email from employee module", employee.myEmail)
    console.log("Welcome to my application. I am Sakshi and a part of FunctionUp Californium Cohort", details.myWelcome )


    const months= ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November","December"]
     console.log(lodash.chunk(months,3))
     const oddno= [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
     console.log(lodash.tail(oddno))
     const a= [2,3,2,3]
     const b= [4,6,4,6]
     const c= [8,0,7,0]
     const d= [3,5,1,3]
     const e= [4,6,1,1]
     console.log(lodash.union(a,b,c,d,e))
     const obj= (["horror”,”The Shining"],["Drama”,”Titanic"],["thriller”,”Shutter Island"],["fantasy”,”Pans Labyrinth"])
    console.log(lodash.fromPairs(obj))
    res.send('any dummy text')
});


router.get('/test-you', function(req, res){
    console.log("I am here")
    console.log("current date",details2.date )
    console.log("current month",details3.month )

    res.send("very important text")
})
router.get('/getInfo', function(req, res){
    console.log("Californium, W3D4, the topic of the day is Nodejs module system")
    res.send("getBatchinfo")
})
   
router.get('/trim', function (req,res){
      console.log("trimed content", details4.str1.trim())
      console.log("Characters in lowercase- ", details5.urString)
      console.log("Characters in upperCase- ", details5.UrString)
      res.send("Hello!")
})
router.get('/movies', function(req, res){
    res.send(["Chak de India", "Namaste London", "Conjuring"]) 
    }) 
module.exports = router;