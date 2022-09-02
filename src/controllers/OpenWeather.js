let axios = require("axios")

let getWeather = async function (req, res){
    try{
        let city = req.query.q
        let appid = req.query.appid
        let option = {
            methods: 'get',
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}`
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


let getCitiesTemp = async function(req, res){
  try{
    let cities = ["Bengaluru","Mumbai","Delhi","Kolkata","Chennai","London","Moscow"]
    let arrayOfCities = []
    for(i=0; i<cities.length; i++){
    let obj = {city: cities[i]} // {city:"Bengaluru"}
    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=2ad2928d8439fc3588dfadb43d8eca30`)
    console.log(resp.data.main.temp)
    obj.temp = resp.data.main.temp // {city:"Bengaluru", tem:298.42}
    arrayOfCities.push(obj)
  }
   let sorted = arrayOfCities.sort(function (a,b){return a.temp - b.tem})
   console.log(sorted)
   res.status(200).send({status: true, data: sorted})
}
 catch(err){
  console.log(err)
  res.status(500).send({msg:err.message})
 }
}
module.exports.getWeather = getWeather
module.exports.getCitiesTemp = getCitiesTemp