const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    name: {
        type: String
        
    },

    quote: {
        type: String
    },

    explanation: {
        type: String
        
    },

    source: {
        type: String
        
    }

});


module.exports = mongoose.model('Posts', PostSchema);