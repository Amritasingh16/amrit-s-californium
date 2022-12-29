const jwt= require("jsonwebtoken")


const myMW= async function(req, res, next){
try{

    let header=  req.headers["x-auth-header"]
    if(!header){
        return res.status(401).send ({Error: "Request is missing an Header"})
    } 
        console.log(header)
        let validToken= jwt.verify(header, "my-secret-keys")
        req.validToken=validToken
       if(!validToken){
            return res.send({ status: false, data: "INVALID TOKEN"})
          } next()
    }catch (error){
        return res.status(500).send({msg: error.message })
    }   
        
    }   
        
    const validation= async function(req, res, next){
        let userPostModify= req.params.users
       //console.log(userPostModify)
       let userlogged= req.validToken
       //console.log(userlogged)
       
       if(userPostModify!= userlogged.userId){
        return res.send({status: false, data: "User not indentified"})
       }   next()

    }

    module.exports.myMW= myMW
    module.exports.validation=validation