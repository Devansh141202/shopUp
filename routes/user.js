const express = require ('express');
const {createUser, userSignIn} = require ('../controllers/user');
const {createProduct} = require ('../controllers/products');
const { isAuth } = require('../middleware/auth');
const { validateUserSignUp, userValidation, validateUserSignIn } = require('../middleware/validation/user');
const router = express.Router();
router.post('/create-user', validateUserSignIn, validateUserSignUp,createUser);
router.post('/sign-in', userValidation, validateUserSignIn ,userSignIn);
router.post('/create-product', createProduct);
router.post('/create-post', isAuth, (req, res, next)=>{
    res.send('Welcome secret cloud');
});

module.exports = router;