
const userModel= require("../models/userdoc")
const OrderModel= require("../models/orderdoc")
const productModel= require("../models/productdoc")

//const isValidUser= require("express")

const createUser= async function(req, res){
    let body = req.body
    let result= await userModel.create(body)
   
        res.send({ data: result })
    
    }

const createOrder= async function( req, res){
    let body = req.body.userId
    let body2= req.body.productId

    if(!body){
       return res.send({ Error:"UserId required"})
   }else if(!body2){
      return res.send({ Error: "ProductId required" })
   }
    let validateUserId=await userModel.findOne({_id:body})
     if(!validateUserId){
     return res.send({ Error: "INVALID userId" })

    
       } 
       let validateproductId= await productModel.findOne({_id:body2})
       if(!validateproductId){
       return res.send({Error: "IVALID productId"})
       } 
        if(data.isFreeAppUser=="true"){
       let myResult= await OrderModel.create(req.body)
        res.send({ data: myResult })
       
        }else{ 
            let pId= await productModel.findOne({_id:body2})
            let price= pId.price
            req.body.amount=price
            let userId= await userModel.findOne({ _id: body}).select({balance:1, _id: 0})
            if(userId.balance<price){
                return res.send(" Insufficient Balance! ")
            }
        }
}
    
    

const createProduct= async function(req, res){
    let body= req.body
    let myResult= await productModel.create(body)
    res.send({ data: myResult })
}

module.exports.createUser=createUser
module.exports.createOrder=createOrder
module.exports.createProduct=createProduct
