const jwt= require("jsonwebtoken")
const userModel= require("../models/myUserModel")


const myUsers= async function( req, res){
   try{
    let data= req.body
    let result= await userModel.create(data)
    res.send({ status: true, response: result})
   }catch(err){
    return res.status(500).send({msg: err.message })
   }
}
const myLogins= async function( req, res){
    let username= req.body.email
    let password= req.body.password
    let result= await userModel.findOne({ email: username , password : password }) 
    if(!result){
        return res.status(401).send({ status: false, Error: "UserName and password is incorrect"})
    }
    let token= jwt.sign({userId: result._id,},  "my-secret-keys")
     res.setHeader("x-auth-token", token)
     res.send({ status: true, data: {token}})
}

const getmyUsers= async function (req, res){
     let data= req.params.users
    let result= await userModel.findOne({_id: data})
       res.send({ satus: true, data: result })

    
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
const modifyUser= async function (req, res){
    let data= req.body.message
    let userPostModify= req.params.users
    let validUser= await userModel.findOne({_id:userPostModify})
       if(!validUser){
        return res.send({status: false, Error: "INVALID USER"})
       }
       let updatePost= validUser.post
       updatePost.push(data)
       let updatedPost= await userModel.findOneAndUpdate({_id:validUser._id},{post:updatePost},{new:true})
       res.send({status : true, data: updatedPost})
    }
   
    //    let userPostModify= req.params.users
    //    //console.log(userPostModify)
    //    let userlogged= req.validToken
    //    //console.log(userlogged)
       
    //    if(userPostModify!= userlogged.userId){
    //     return res.send({status: false, data: "User not indentified"})
    //    }
       //let myData= req.params.userId
       
 module.exports.myUsers=myUsers
 module.exports.myLogins=myLogins
 module.exports.getmyUsers=getmyUsers
 module.exports.updateMyUsers=updateMyUsers
 module.exports.deleteMyUsers=deleteMyUsers
 module.exports.modifyUser=modifyUser