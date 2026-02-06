const {body} = require('express-validator');

const courseValidator = [
    body('courseName').notEmpty().isString().withMessage('Course name is required'),
]
module.exports = {courseValidator};