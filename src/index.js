const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://AmritaSingh:AAsingh1627@cluster016.jdmspyj.mongodb.net/amrita1627", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )


app.use(
    function (req,res,next){
        const ip= req.ip
        const url= req.url
        const date= new Date()
        console.log(date, ip, url)
        next()
    }

)
app.use('/', route);

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
