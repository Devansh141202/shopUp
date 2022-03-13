const { is } = require('express/lib/request');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

exports.createUser = async (req, res)=>{
    const {firstName, lastName, email, password, confirmpassword, phoneNo} = req.body;
    const isNewUser = await User.isThisEmailInUse(email);
    if(!isNewUser)
    {
        return res.json({
            success: false,
            message: 'This email already in use, plz sign in with this email',
        });
    }
   const user = await User({
       firstName,
       lastName,
       email, 
       password,
       confirmpassword,
       phoneNo,
    });
    await user.save();
    res.json(user);

}

exports.userSignIn = async (req, res)=>{
    const {email, password} = req.body
    // console.log(email, password);
    cred = {
        email: email,
        password: password,
    }
    console.log(cred)
    const user = await User.findOne({email})

    if(!user) return (console.log("user not found"));
        // res.json({success: false, message: 'user not found'});

    const isMatch = await user.comparePassword(password);
    if(!isMatch) return (console.log("logged in successfully"));
    // res.json({success: false, message: 'email/password is does not match'});

    const token = jwt.sign({userId: user._id}, 'VERYsecret', {expiresIn: '1d'})
    res.json({success: true, user, token});
}