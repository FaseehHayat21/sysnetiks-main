const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({

    name:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },    
    date:{
        type: Date,
        default: Date.now
    },
    role:{
        type: String,
        default: "User"
    },
}

  );

  module.exports = mongoose.model('User', UserSchema);