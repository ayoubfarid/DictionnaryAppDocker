var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    word: {
        type: String,
        required: true,
    },
    meaning: {
        type: String,
        default: ''
    }
});

var dictionnary = new mongoose.model('dictionnary', schema);

module.exports = dictionnary;