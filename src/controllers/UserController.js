
const UserModel = require("../models/UserModel")

const createUser = async function (req, res) {
    let User = req.body
    //let userheaders = req.headers.isFreeAppUser
    //console.log(userheaders)
    // let resHeader = res.headers.isFreeAppUser
    // console.log(resHeader)
    let userCreated = await UserModel.create(User)
    res.send({data: userCreated})
}

module.exports.createUser = createUser
