const jwt = require("jsonwebtoken")
const userModel= require("../models/myUserModel")


const myUsers= async function( req, res){
    let data= req.body
    let result= await userModel.create(data)
    res.send({ status: true, response: result})
}
const myLogins= async function( req, res){
    let username= req.body.email
    let password= req.body.password
    let result= await userModel.findOne({ email: username, password: password })
    if(!result){
       return res.send({ status: false, Error: "UserName and password is incorrect"})
    }
    let token= jwt.sign(
        {
        userId: userModel._id,
        
    }, 
       "my-secret-keys"
    )
     res.setHeader("x-auth-token", token)
     res.send({ status: true, data: {token}})
}

const getmyUsers= async function (req, res){
    let data= req.params.users
    let header= req.headers["x-auth-token"]
       let result= await userModel.findOne({_id: data})
       res.send({ satus: true, data: result })

       let validToken= jwt.verify(header, "my-secret-keys")
       if(!validToken)
       return res.send({ status: false, data: " INVALID Token "})
    }
const updateMyUsers= async function(req, res){
    let data= req.params.users
    let update= req.body
    let myResult= await userModel.findOneAndUpdate({_id: data},{$set:update},{new:true})
     res.send({ status: true, data: myResult})
}
const deleteMyUsers= async function(req, res){
    let data= req.params.users
    let myResult= await userModel.findOneAndUpdate({_id:data},{$set:{isDeleted: true}}, {new:true})
    res.send({ status: true, data: myResult })
}
 module.exports.myUsers=myUsers
 module.exports.myLogins=myLogins
 module.exports.getmyUsers=getmyUsers
 module.exports.updateMyUsers=updateMyUsers
 module.exports.deleteMyUsers=deleteMyUsers