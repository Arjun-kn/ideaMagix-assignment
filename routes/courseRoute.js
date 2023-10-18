let express = require('express')
const courseController = require('../controllers/course')

let router = express.Router()


// Add new course

router.post('/new-course', courseController)

module.exports = router