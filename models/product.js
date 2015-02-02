// models/product.js
// load the things we need
var mongoose = require('mongoose');

// define the schema for our user model
var productSchema = mongoose.Schema({
    productname: String,
    productprice: Number,
    productestar: Boolean,
    producttype: String,
    productco: String,
});

// methods ======================


// create the model for users and expose it to our app
module.exports = mongoose.model('Product', productSchema);