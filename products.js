const mongoose = require('mongoose');
const {Schema} = mongoose;
const schema = new Schema({
    name:String,
    brand:String,
    price:Number,
    category:String
});
let Model = mongoose.model('projects',schema);
module.exports = Model 