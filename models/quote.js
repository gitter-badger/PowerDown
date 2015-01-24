// models/rebate.js
// load the things we need
var mongoose = require('mongoose');

// define the schema for our user model
var quoteSchema = mongoose.Schema({
    quote: []
});

// methods ======================


// create the model for users and expose it to our app
module.exports = mongoose.model('Quote', quoteSchema);