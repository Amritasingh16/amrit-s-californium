const mongoose= require('mongoose')

const myAuthorSchema= new mongoose.Schema({
    authorName: String,
    age:Number,
    address: String,
    rating: Number
},{ timestamps: true});
module.exports= mongoose.model("myAuthor",myAuthorSchema)