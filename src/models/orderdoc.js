const mongoose= require('mongoose')
const ObjectId= mongoose.Schema.Types.ObjectId

const orderSchema= new mongoose.Schema({
    userId:{
        type: ObjectId,
        ref : "myUser"
    },
    productId:{
        type: ObjectId,
        ref: 'myProduct'
    },
    amount: Number,
    isFreeAppUser:Boolean,
    date: String

    
}, { timestamps: true})
module.exports= mongoose.model( "myOrder", orderSchema )