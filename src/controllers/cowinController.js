let axios = require("axios")

let getByDistrict = async function (req, res){
    try{
        let district = req.query.districtId
        let date = req.query.date
        let option = {
            methods: 'get',
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${district}& 
            date=${date}`
        }
     let result = await axios(option);
     console.log(result)
     let data = result.data
     res.status(200).send({msg:data, status:true})   
    }
    catch(error){
        console.log(error)
        res.status(500).send({msg:error.message})
    }
}

module.exports.getByDistrict = getByDistrict