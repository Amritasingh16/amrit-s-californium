const mongoose= require("mongoose")
 const myUserSchema= new mongoose.Schema({
    firstName: String, 
    lastName: String,
    mobile: Number,
    emailId: String,
    password: String,
    gender: String,
    isDeleted:{
        type: Boolean,
        default: false
    },
    age: Number,
    

 }, { timestamps: true})
 module.exports= mongoose.model('myUserCollection', myUserSchema)