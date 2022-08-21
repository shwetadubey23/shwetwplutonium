const NewpublisherModel = require("../models/NewpublisherModel")

const creatPublisher = async function (req, res) {
    let publisher = req.body
    let publisherCreated = await NewpublisherModel.create(publisher)
    res.send({data: publisherCreated})
}

module.exports.creatPublisher = creatPublisher
