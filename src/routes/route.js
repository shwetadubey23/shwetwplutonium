const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();
//======================1========================================//
router.get('/get-movies',function(req, res){  
  let movies1= ["Koi mil gaya ","Shera","Robot","De dana dan"]
  res.send(movies1)
})
//======================2======================================//
router.get('/get-movie/:indexNumber',function(req, res){ 
    
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

/*router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    logger.welcome()

    res.send('My second ever api!')
});

router.get('/students', function (req, res){
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})

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

module.exports = router;
*/