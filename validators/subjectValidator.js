const {body} = require('express-validator');

const subjectValidator =[
    body('subjectName').isString().notEmpty().withMessage('Subject name is required'),
    body('numberOfNotes').notEmpty().withMessage('Number of notes is required'),
    body('imageUrl').isURL().withMessage('Valid image URL is required'),
]

module.exports={subjectValidator};