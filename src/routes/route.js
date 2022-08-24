const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const PublisherController = require("../controllers/PublisherController")

router.post("/createBook", bookController.createBook)
router.post("/createAuthor", authorController.createAuthor)

router.post("/creatPublisher", PublisherController.creatPublisher)

router.put("/UpdateAuthorRating", bookController.getUpdateAuthor)
router.put('/getUpdatePublisher',bookController.UpdatePublisher)

router.get('/getBooksAuthorAndPublisher', bookController.getBook)





module.exports = router;