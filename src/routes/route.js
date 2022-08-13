const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

let persons=[
  {
    name: "PK",
    age:  "10",
    votingStatus: false,
  },
 {
    name: "SK",
    age: "20", 
    votingStatus: false
},
 {
    name: "AA",
    age:   "70",
    votingStatus: false
 },
  {
    name: "SC",
    age:   "5",
    votingStatus: false
 },
  {
    name: "HO",
    age:   "40",
    votingStatus: false
 }
]

 router.post('/persons',function(req,res){
 let votingAge = req.query.age
  let eligiblePerson = []
  for(let i=0; i<persons.length; i++){
    if(persons[i].age > votingAge){
      persons[i].votingStatus = true;
      eligiblePerson.push(persons[i])
    }
}
     res.send(  {persons: eligiblePerson, status: true }  ) 
})
//======================================================================================//
/*
let players =
   [
     {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ]
    },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ],
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ],
       },
   ]

   router.post('/players', function (req, res) {
       let newDetails = req.body
       let newPlayersName = newDetails.name
       let nameRepeated = false

       for (let i = 0; i<players.length; i++){
        if(players[i].name==newPlayersName){
           nameRepeated = true;
             break;
        }
       }
         if(nameRepeated){
           res.send("This player was already exists")
         }else{
          players.push(newDetails)
          res.send(players)
         }
       
       
       res.send(  { data: players , status: true }  )
   })
   */
//======================================================================================//
/*router.get("/sol1", function (req, res) {
  //logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array.
  // now take sum of numbers till last digit in the array
  let arr = [7,8,9,10,12,13]
  let total = 0;
  for(var i in arr){
    total += arr[i];
  }
 let lastDigit = arr.pop()
 let consecutiveNum = lastDigit * (lastDigit+1)/2 
  let missingNumber = consecutiveNum - total
 
  res.send(  { data: missingNumber  }  );
});

//=======================2=======================================//
router.get("/sol2", function (req, res) {
  //logic : sum of n consecutive numbers is [ n * (first + last) / 2  ]..so get sum of all numbers in array.
  // now take sum of n consecutive numbers.. n would be length+1 as 1 number is missing
  let arr= [45, 46, 48, 49, 50]
  let len = arr.length
  let total = 0;
  for(var i in arr) {
    total += arr[i];
  }

  let firstDigit = arr[0]
  let lastDigit= arr.pop()
  let consecutiveNum= (len +1) * (firstDigit+ lastDigit)/2
  let missingNumber = consecutiveNum - total

  res.send(  { data: missingNumber  }  );
});
*/
/*
//======================1========================================//
router.get('/get-movies/:movies1',function(req, res){  
  let movies1= ["Koi mil gaya ","Shera","Robot","De dana dan"]
  res.send(movies1)
})
//======================2======================================//
/*router.get('/get-movie/:indexNumber',function(req, res){ 
    
  let movies=['Pk','dear jindgi','gully boy','Jindgi na milegi dobara']
  let index = req.params.indexNumber;
  console.log(movies[index])
   res.send(movies[index])
})

//========================3==================================//

router.get('/get-moviess/:indexNumber',function(req, res){  
    
  let moviesName=['Pk','dear jindgi','gully boy','Jindgi na milegi dobara']
  let index = req.params.indexNumber;

   if(index > moviesName.length){
      return res.send("use a valid index  ")
   }else{
  
   res.send(moviesName[index])
   }
})
//=====================4=======================================//
router.get('/get-/films',function(req, res){  

  let moviesName=[ {"id": 1,"name": "The Shining"}, 
{"id": 2,"name": "Incendies"}, 
{"id": 3,"name": "Rang de Basanti"},
{"id": 4,"name": "Finding Nemo"}]
  res.send(moviesName)
})

//===================5==========================================//
router.get('/get-/films/:indexNumber',function(req, res){  

  let moviesName=[ {"id": 1,"name": "The Shining"}, 
{"id": 2,"name": "Incendies"}, 
{"id": 3,"name": "Rang de Basanti"},
{"id": 4,"name": "Finding Nemo"}]
  let index = req.params.indexNumber;
   if(index > moviesName.length){
      return res.send("no movie exist with this id ")
   }else{
   res.send(moviesName[index])
   }
})
*/
/*
router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    logger.welcome()

    res.send('My second ever api!')
});

router.get('/students', function (req, res){
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})
/*
router.get('/student-details/:name', function(req, res){
    /*
    params is an attribute inside request that contains 
    dynamic values.
    This value comes from the request url in the form of an 
    object where key is the variable defined in code 
    and value is what is sent in the request
    */
  /*router.get('/get-movi:name',function(req, res){
    let movies2 = ['avenger', 'Don', 'doom', 'captain']
    console.log(req.params)
    let count = movies2.length
    count++
    let a = movies2[req.params.name]
    console.log(a)
    res.send
  })
    let requestParams = req.params

    // JSON strigify function helps to print an entire object
    // We can use any ways to print an object in Javascript, JSON stringify is one of them
    console.log("This is the request "+ JSON.stringify(requestParams))
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    
    res.send('Dummy response')
})
*/
module.exports = router;
