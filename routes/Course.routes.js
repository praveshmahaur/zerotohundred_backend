const express = require('express');
const router = express.Router();

const {courseValidator} = require('../validators');
const {CourseController} = require('../controllers/CourseController');
router.post ('/',courseValidator,CourseController.createCourse);

module.exports = router;