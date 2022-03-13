const express = require('express');
const mongoose = require('mongoose');
const bcrypt =require('bcrypt');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        uniqueL: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    confirmpassword: {
        type:String,
        required : true,
    },
    phoneNo: {
        type: String,
        required: true
    }
});

userSchema.pre('save', function(next) {
    if(this.isModified('password')){
        bcrypt.hash(this.password, 8, (err, hash) => {
            if(err) return next(err);

            this.password = hash;
            next();
        })
    }
})

userSchema.methods.comparePassword = async function (password) {
    if (!password) throw new Error('Password is mission, can not compare!');
  
    try {
      const result = await bcrypt.compare(password, this.password);
      return result;
    } catch (error) {
      console.log('Error while comparing password!', error.message);
    }
  };

userSchema.statics.isThisEmailInUse = async function(email){
    if(!email) throw new Error('Invalid email');
    try {
        const user = await this.findOne({ email });
        if (user) return false;

        return true;

    } catch (err) {
        console.log('error in this function', err.message);
        return false;
    }

};

module.exports = mongoose.model('User', userSchema);