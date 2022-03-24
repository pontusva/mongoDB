const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
        
    },

    quote: {
        type: String,
        required: true
    },

    explanation: {
        type: String,
        required: true
    },

    source: {
        type: String,
        required: true
    }
  

});


module.exports = mongoose.model('Posts', PostSchema);