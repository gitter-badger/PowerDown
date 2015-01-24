var Product = require('../models/product.js');

var productController = {
    getall: function(req, res) {
        Product.find({}, function(err, data) {
            if (err)
                console.log('##Error getting users', err);
            else
                res.json(data)
        })
    },
    deleteone: function(req, res) {
        User.remove({email: req.body.email}, function(err){
            if(err)
                console.log('##Delete Error', err)
        })
    },
    update: function(req, res){

    },
    newproduct: function(req, res) {

    }
};

module.exports = productController;