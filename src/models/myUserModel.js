const mongoose= require("mongoose")
 const myUserSchema= new mongoose.Schema({
    firstName: {
        type:String,
        required: true}, 
    lastName: {
        type:String,
        required: true},
    mobile: Number,
    emailId: String,
    password: String,
    gender: String,
    isDeleted:{
        type: Boolean,
        default: false
    },
    age: Number,
    post: {
        type:[],
        default:[]
    }
    

 }, { timestamps: true})
 module.exports= mongoose.model('myUserCollection', myUserSchema)