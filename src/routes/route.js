const express = require('express');
const router = express.Router();
const BookModel = require("../model/BookModel");
const BookController = require("../Controller/BookController");

router.post('/createBook', BookController.createBook);
router.get('/bookList',BookController.bookList);
router.get('/getBooksInYear', BookController.bookInYear);
router.get('/getParticularBooks',BookController.getParticularBooks);
router.get('/getXINRBooks', BookController.getPrice);
router.get('/getRandomBooks', BookController.randomBooks)


module.exports = router;
