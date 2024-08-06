const mongoose = require('mongoose');
const { Schema } = mongoose;

const NewsSchema = new Schema({

    text:{
        type: String,
        required: true
    },
    link:{
        type: String,
        required: true
    },
   
    date:{
        type: Date,
        default: Date.now
    },

}

  );

  module.exports = mongoose.model('News', NewsSchema);