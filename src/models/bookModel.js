const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    name: String,
    author: {
        type: ObjectId,
        ref: "LibraryAuthor"
    }, 
    price: Number,
    rating: Number,
    publisher:{
        type: ObjectId,
        ref: "myPublisher"
    }


}, { timestamps: true });


module.exports = mongoose.model('LibraryBook', bookSchema)
