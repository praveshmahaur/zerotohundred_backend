const {body} = require('express-validator');

const userValidators = [
        body('name').isString().notEmpty().withMessage('Name is required'),
        body('phoneNumber').isString().isLength({min:10,max:10}).notEmpty().withMessage('Phone number is required'),
        body('role').isString().notEmpty().withMessage('Role is required'),
        body('photoURL').isURL().withMessage('Valid photo URL is required'),
];
module.exports = {userValidators};