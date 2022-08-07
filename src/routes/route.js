const express = require('express');
const first = require('../logger/logger')
const second = require('../util/helper')
const third = require('../validator/formatter')
const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send("code run success")
    first.mywell()
    second.currnetDe()
    second.month()
    second.batch()
    third.trim()
    third.lower()
    third.upper() 
});





module.exports = router;
// adding this comment for no reason