const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  
    email: {
        unique : true,
        type: String,
        required : true  
    },
    password :{
        type: String,
        required : true
    },
  
});

const User = module.exports = mongoose.model('User',UserSchema);
