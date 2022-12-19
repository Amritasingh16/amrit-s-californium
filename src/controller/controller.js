const bookModel= require("../model/book")

const createBook2= async function (req, res){
    let body= req.body
    let result= await bookModel.create(body)
    res.send({ data: result })
}
const mybooklist= async function (req,res){
    let result= await bookModel.find().select( { bookName:1, authorName:1, _id:0 } )
    res.send({ data: result })
}
const getBooksbyYear= async function(req,res){
    let data =req.params.year
    let result2= await bookModel.find(data)
    res.send({ data : result2 })

}
const getpbook= async function(req, res){
    let data2= req.body
    let result3= await bookModel.find(data2)
    res.send({ data: result3 })
}
const getX= async function(req, res){
    let result4= await  bookModel.find({"price.indian":{$in:[100,200,500]}})
    res.send({ data: result4 })
}
const getRbook= async function(req, res){
    let result5= await bookModel.find({$or:[{stockAvailable:true}, {totalPages:{$gt:500}}]})
    res.send({ data : result5 })
}
module.exports.createBook2=createBook2
module.exports.mybooklist= mybooklist
module.exports.getBooksbyYear=getBooksbyYear
module.exports.getpbook=getpbook
module.exports.getX=getX
module.exports.getRbook=getRbook
