const mongoose= require('mongoose')
const ObjectId= mongoose.Schema.Types.ObjectId



const bookSchema = new mongoose.Schema({
    
	name:String,
    author : {
        type : ObjectId,
        ref :"myAuthor",
        required:true
    },
	price:Number,
    ratings:Number,
    q
    isHardCover: {
        type:Boolean,
       default: false
    }
},{timestamps:true})

module.exports = mongoose.model('myBookCollection',bookSchema)

