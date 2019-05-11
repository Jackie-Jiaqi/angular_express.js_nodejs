var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
    userName:String,
    password:String,
    
});

module.exports = mongoose.model('model-user',userSchema);