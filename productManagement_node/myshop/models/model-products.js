var mongoose = require('mongoose');
var productSchema = new mongoose.Schema({
    title:String,
    detail:String,
    price:Number,
});

module.exports = mongoose.model('model-products',productSchema);