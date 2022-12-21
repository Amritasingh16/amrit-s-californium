const authorModel= require('../models/myAuthor')
const bookModel= require('../models/myBook')
// post--------------
const createAuthors=async function (req,res){
    let body=req.body
    let finalAuthor= await authorModel.create(body)
    res.send({ data: finalAuthor })
}
const createBooks= async function(req,res){
    let body2 = req.body
    let finalBook= await bookModel.create(body2)
    res.send({ data: finalBook })
}
//get-----------------------
const getlist= async function(req, res){
    let data= req.params
    let myResult= await authorModel.findOne({ data })
    let myData= myResult.author_id
    let finalResult= await bookModel.find({ author_id:myData })
    res.send({ data : finalResult })
}
const getAuthor= async function(req, res){
    let body =req.body.name
    let data= req.body.price
    let myResult2= await bookModel.findOneAndUpdate(
        {name:body},
        {$set:{price:data}},
        {new:true})
        let finalAuthor= await authorModel.findOne({author_id: myResult2.author_id})
        let final= [{author_name:finalAuthor.author_name,
        price:myResult2.price}]
        res.send({ data : final })
    
    
}
const getCostbook= async function(req, res){
    let myResult3= await bookModel.find({price:{$gte:50,$lte:100}})
    let arr= myResult3.map(x=>x.author_id)
    let book= await authorModel.find({author_id:{$in:arr}})

    res.send({ data: book })
}


module.exports.createAuthors=createAuthors
module.exports.createBooks=createBooks
module.exports.getlist=getlist
module.exports.getAuthor=getAuthor
module.exports.getCostbook=getCostbook

