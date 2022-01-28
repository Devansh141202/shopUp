const express = require ('express');
const {createUser, userSignIn} = require ('../controllers/user');
const { isAuth } = require('../middleware/auth');
const { validateUserSignUp, userValidation, validateUserSignIn } = require('../middleware/validation/user');
const router = express.Router();
router.post('/create-user',validateUserSignUp,userValidation,createUser);
router.post('/sign-in', userValidation, validateUserSignIn ,userSignIn);
router.post('/create-post', isAuth, (req, res, next)=>{
    res.send('Welcome secret cloud');
});

module.exports = router;