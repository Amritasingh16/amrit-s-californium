

const midware1= async function( req, res, next){
    let data= req.headers.isfreeappuser
    let body= req.body
    if(!data){
        res.send("The request is missing a mandatory header." )
    }
     if(data =='true'){
        body.isFreeAppUser = true
        
    }else{
          body.isFreeAppUser = false
             
    }  next() 
    
}
 

module.exports.midware1=midware1
