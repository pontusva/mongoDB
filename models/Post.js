const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    quote: {
        type: String,
        required: true
    },

    explanation: {
        type: String
    },

    source: {
        type: String,
        required: true
    }

});


module.exports = mongoose.model('Posts', PostSchema);