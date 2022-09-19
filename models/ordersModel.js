const { Schema, model } = require("mongoose");

const schema = new Schema({
    customer_name: { type: String, required: true },
    customer_email: { type: String, required: true },
    purchased_product: String,
    quantity: { type: Number, required: true },
    shipping_address: {
        street: String,
        area: String,
        city: String,
        state: String,
        country: String,
        pincode: Number,
    },
    purchased_on: { type: Date, default: Date.now() },
});

module.exports = model("orders", schema);
