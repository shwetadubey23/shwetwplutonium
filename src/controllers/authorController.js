
const NewauthorModel= require("../models/NewauthorModel")

const createAuthor= async function (req, res) {
    let author = req.body
    let authorCreated = await NewauthorModel.create(author)
    res.send({data: authorCreated})
}

const getAuthorsData= async function (req, res) {
    let authors = await NewauthorModel.find()
    res.send({data: authors})
}

module.exports.createAuthor= createAuthor
module.exports.getAuthorsData= getAuthorsData