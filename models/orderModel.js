const mongoose = require("mongoose");


const productSchema = [
    {
        product_name: { type: "string", required: true },
        category: { type: "string", required: true },
        quantity: { type: "number", required: true },
        price: { type: "number", required: true },
    }
];

const addressSchema = {
    name: { type: "string", required: true },
    address: { type: "string", required: true },
    pincode: { type: "string", required: true }
}

const schema = new mongoose.Schema({ 
    order_id: { type: "string", required: true },
    customer_name: { type: "string", required: true },
    customer_email: { type: "string", required: true },
    purchased_at: { type: "date", default: new Date() },
    order_total: { type: "number", required: true },
    products: productSchema,
    shipping_address: addressSchema,
});

module.exports = mongoose.model("orders", schema);
