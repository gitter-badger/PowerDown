// models/product.js
// load the things we need
var mongoose = require('mongoose');

// define the schema for our user model
var productSchema = mongoose.Schema({

    motors: [{

    }],
    antisweat: [{

    }],
    coolerled: [{

    }],
    ledlights: [{

    }]
});

// methods ======================


// create the model for users and expose it to our app
module.exports = mongoose.model('Product', productSchema);