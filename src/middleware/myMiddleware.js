const myMW= async function(req, res, next){


let header= req.headers["x-auth-token"]
if(!header){
    return res.send ({Error: "Request is missing an Header"})
} 
    console.log(header)
    next()

}
module.exports.myMW= myMW