const mongoose= require('mongoose')

const authorSchema= new mongoose.Schema ( {
      author_id:{
        type:Number,
        required:true
    },

    author_name:{
        type:String, 
    },

    age:Number,

    address:String
   
},{timestamps:true})
module.exports= mongoose.model("AAcollection",authorSchema)