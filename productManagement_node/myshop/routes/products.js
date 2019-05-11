var express = require('express');
var router = express.Router();
var Products = require('../models/model-products');


router.get('/', function (req, res, next) {
    Products.find(function (err, data) {
        if (err) return next(err);
        res.json(data);
    });
});

router.post('/', function (req, res, next) {
    Products.create(
        req.body,
        function (err, post) {
            if (err) return next(err);
            res.json(post);
        }
    );
});

router.get('/:productId', function (req, res, next) {
    Products.findById(req.params.productId, 
        function (err, data) {
        if (err) return next(err);
        res.json(data);
    });
});

router.put('/:productId',function(req,res,next){
    Products.findByIdAndUpdate(req.params.productId,req.body,
        function (err, post) {
            if (err) return next(err);
            // res.json(post);
            res.json({
                code:"0",
                msg:"update successful"
            });
        });
});

router.delete('/:productId',function(req,res,next){
    Products.findByIdAndRemove(req.params.productId,
        function (err, data) {
            if (err) return next(err);
            // res.json(data);
            res.json({
                code:"0",
                msg:"delete successful"
            });
        
        });
});




module.exports = router;