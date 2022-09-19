const { Schema, model } = require("mongoose");

const schema = new Schema({
    product_name: { type: 'string', required: true },
    category: { type: 'string', required: true },
});

module.exports = model('products', schema);