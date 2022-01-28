const jwt = require('jsonwebtoken');
const User = require('../models/user');

exports.isAuth = async (req, res, next) => {
    if (req.headers && req.headers.authorization) {
        const token = req.headers.authorization.split(' ')[1]

        try {
            const decode = jwt.verify(token, 'VERYsecret')
            const user = await User.findById(decode.userId)

            if (!user) return res.json({ success: false, message: 'unautorized access!' })

            req.user = user;
            next();
        } catch (err) {
            if(err.name === 'JsonWebTokenError'){
                return res.json({success: false, message: 'unautorized access!'})
            }
            if(err.name === 'TokenExpiredError'){
                return res.json({success: false, message: 'Sesssion expired, try with sign-in'})
            }
            res.json({success: false, message: 'Internal server error'})
        }

    } else {
        req.json({ success: false, message: 'unautorized access!' })
    }
    console.log(req.headers.authorization);
}