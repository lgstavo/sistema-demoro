const mongoose = require('mongoose');
const validator = require('validator');

//name, email, password, confirmPassword, 
const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Please enter your name.']
    },
    email:{
        type: String, 
        required: [true, 'Please enter your e-mail.'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Please enter a valid email.']
    },
    password:{
        type: String,
        required: [true, 'Please enter a password.'],
        validate: [validator.isStrongPassword, 'Please enter a strong password']
    },

})

const User = mongoose.model('User', userSchema);

module.exports = User;