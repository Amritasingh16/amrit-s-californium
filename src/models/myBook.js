const mongoose= require('mongoose')

 const bookSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    author_id:{
        type: Number
    },

    price:Number,
    ratings:Number

 },{ timestamps:true})

 module.exports= mongoose.model("AAcollection2",bookSchema)