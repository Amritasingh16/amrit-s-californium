const jwt= require("jsonwebtoken")


const myMW= async function(req, res, next){


    let header=  req.headers["x-auth-header"]
    if(!header){
        return res.send ({Error: "Request is missing an Header"})
    } 
        console.log(header)
        let validToken= jwt.verify(header, "my-secret-keys")
        req.validToken=validToken
       if(!validToken){
            return res.send({ status: false, data: "INVALID TOKEN"})
          } next()
        
        
    }   
        
    

    module.exports.myMW= myMW