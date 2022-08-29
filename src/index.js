const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://Shwetadubey:QvtqJ8hdhmn0fhlT@cluster0.ymyddly.mongodb.net/MyDB4?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )
// const moment = require('moment')
// const time = moment();
// app.use(
//     function(req, res, next){
//     console.log("It's Global Middlewares");
//         console.log(time.format ('DD,MM,YYYY'));
//         console.log(time.format('h:mm:ss'))
//     console.log(req.ip)
//     console.log(req.originalUrl)
//      next();
//     }
// );
app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
