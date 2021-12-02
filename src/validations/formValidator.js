const {check} = require('express-validator')

module.exports = [
    check('name')
        .notEmpty().withMessage('¡Debes poner tu nombre!'),
    check('color')
        .notEmpty().withMessage('Debes poner un color'),
    check('email')
        .notEmpty().withMessage('Debes poner un mail')
        .isEmail().withMessage('Debe ser un mail valido'),
    check('age')
        .notEmpty().withMessage('Debes poner una edad')
        .isNumeric().withMessage('Debe ser un numero')
        .isLength({min:1, max:2}).withMessage('Debe ser dos dígitos')
]