const mongoose= require('mongoose')
const bookschema= new mongoose.Schema({
    bookName:{
        type:String,
        required:true
    },
    authorName: String,
    year:{
        type:Number,
        default:2021,
    price:{
        indian: Number,
        european: Number
    },
    stockAvailable:Boolean,
    tags:[String],
    totalPages: Number
    }
},{timestamps:true})
module.exports= mongoose.model("Amritabook", bookschema)