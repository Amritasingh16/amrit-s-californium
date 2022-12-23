const bookModel= require("../models/myBook")
const authorModel= require("../models/myAuthor")
const publisherModel= require("../models/myPublisher")
const {isValidObjectId, default: mongoose} = require('mongoose')

const createBook= async function(req, res){
    let body= req.body
    
    // let result= await bookModel.create(body)
    if(!body.author){
        res.send({ data: "authorid is mandatory"})
    
    }else if(!isValidObjectId(body.author)){
        res.send({data: "INVALID author"})
    
    }else if(!body.publisher){
        res.send({ data: "details is required"})
    
    }else if(!isValidObjectId(body.publisher)){
        res.send({ data: "publisher is not present"})
    }
    let result= await bookModel.create(body)
    res.send({ data : result })
}
const createAuthor= async function(req, res){
    let body= req.body
    let result= await authorModel.create(body)
    res.send({ data : result })
}
const createPublisher= async function(req, res){
    let body= req.body
    let result= await publisherModel.create(body)
    res.send({ data : result })
}
const getBookDetails= async function(req, res){
    // let body=req.params
    let data= await bookModel.find().populate("author").find().populate("publisher")
    res.send({ msg: data })
}
const getupdate= async function(req,res){
    let result= await publisherModel.find({name:{$in:['Penguin','HarperCollins']}})
    let publisherId= result.map((publisher)=>publisher._id)
    let update= await bookModel.updateMany({publisher:{$in:publisherId}}, {$set:{isHardCover:true}})
     res.send({ data:update })
}
const getauthors=  async function (req , res){
    let author = await authorModel.find({rating:{$gt: 3.5}})
    let authorId = author.map((x)=> x._id)
    let finalData = await bookModel.updateMany(
        {author:{$in:authorId}},
        {$set:{price:10}})
    res.send({response:finalData})
}

// const getAuthorsData= async function(req, res){
//     let data=req.params
//     let result= await 
// }
module.exports.getauthors=getauthors
module.exports.getupdate=getupdate
module.exports.createBook=createBook
module.exports.createAuthor=createAuthor
module.exports.createPublisher=createPublisher
module.exports.getBookDetails=getBookDetails