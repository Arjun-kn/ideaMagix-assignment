const express = require('express');
const { instructorController, newintructorcontroller } = require('../controllers/instructor');


let router = express.Router()


// get all instructors

router.get('/all-instructors', instructorController)
router.post('/new-instructor', newintructorcontroller)


module.exports = router