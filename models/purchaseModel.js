const mongoose = require("mongoose");


const productSchema = [
    {
        product_name: { type: "string", required: true },
        category: { type: "string", required: true },
        quantity: { type: "number", required: true },
        price: { type: "number", required: true },
    }
];

const schema = new mongoose.Schema({ 
    purchasedAt: { type: "date", default: new Date() },
    order_total: { type: "number", required: true },
    products: productSchema
});

module.exports = mongoose.model("purchase", schema);
