const express = require('express');
const router = express.Router();
const BookController = require("../Controller/BookController");

router.post('/createBook', BookController.createBook);
router.post('/createAuthor', BookController.createAuthor);
router.get('/bookData', BookController.bookData);
router.get('/findAuthor',BookController.findAuthor);
router.get('/findBook',BookController.findBook);


module.exports = router;
