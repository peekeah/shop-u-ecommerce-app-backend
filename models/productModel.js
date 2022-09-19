const { Schema, model } = require("mongoose");

const schema = new Schema({
    product_name: { type: 'string', required: true },
    category: { type: 'string', required: true },
    price: Number,
    description: String,
    image: String,
    rating: { 
        rate: Number,
        count: Number
    }
});

module.exports = model('products', schema);