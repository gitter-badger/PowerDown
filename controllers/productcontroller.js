var Product = require('../models/product.js');

var productController = {
    getall: function(req, res) {
        if(!req.query.type){
            Product.find({}, function(err, data){
                if (err){
                    console.log('##Error getting all products', err)
                }
                else{
                    console.log('##Getting All Product Data', data)
                }
                res.json(data)
            })
        }
        else{
            console.log('!!!!!!Get Product Type', req.query.type);
            Product.find({ 'producttype': req.query.type}, function(err, data) {
                if (err)
                    console.log('##Error getting products', err);
                else
                    console.log('##Getting Data', data);
                res.json(data)
            })
        }
    },
    deleteone: function(req, res) {
        Product.remove({email: req.body.email}, function(err){
            if(err)
                console.log('##Delete Error', err)
        })
    },
    update: function(req, res){

    },
    newproduct: function(req, res) {
        console.log('$$$$$$New Product', req.body);
        var productInstance = new Product.schema;
        productInstance = req.body;
        console.log('Check instance', productInstance);
        productInstance.save(function(err){
            if(err){
                console.log('DATABASE SAVE ERROR')
            }
        })
    }
};

module.exports = productController;