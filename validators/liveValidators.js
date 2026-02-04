const {body} = require('express-validator');

const liveValidators =[
    body('title').isString().notEmpty().withMessage('Title is required'),
    body('subTitle').isString().notEmpty().withMessage('Subtitle is required'),
    body('subjectName').isString().notEmpty().withMessage('Subject name is required'),
    body('time').notEmpty().withMessage('Time is required'),
    body('videoUrl').isURL().withMessage('Valid video URL is required'),
    
]
module.exports={liveValidators};