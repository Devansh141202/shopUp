const { check, validationResult } = require('express-validator');

exports.validateUserSignUp = [
    check('firstName')
        .trim()
        .not()
        .isEmpty()
        .withMessage('First name is required!')
        .isString()
        .withMessage('Must be a valid first name!')
        .isLength({ min: 3, max: 20 })
        .withMessage('Last name must be within 3 to 20 character!'),
    check('lastName')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Last ame is required!')
        .isString()
        .withMessage('Must be a valid Last name!')
        .isLength({ min: 3, max: 20 })
        .withMessage('Name must be within 3 to 20 character!'),
    check('email').normalizeEmail().isEmail().withMessage('Invalid email!'),
    check('password')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Password is empty!')
        .isLength({ min: 8, max: 20 })
        .withMessage('Password must be 3 to 20 characters long!'),
    check('confirmpassword')
        .trim()
        .not()
        .isEmpty()
        .custom((value, { req }) => {
            if (value !== req.body.password) {
                throw new Error('Both password must be same!');
            }
            return true;
        }),
    check('phoneNo').isLength({ min: 10, max: 10 }).withMessage('Enter valid Phone number'),
];

exports.userValidation = (req, res, next) => {
    const result = validationResult(req).array();
    if (!result.length) return next();

    const error = result[0].msg;
    res.json({ success: false, message: error });
};

exports.validateUserSignIn = [
    check('email').trim().isEmail().withMessage('email/password required'),
    check('password').trim().not().isEmpty().withMessage('email/password reqiured'),
]

