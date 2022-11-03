const { Schema, model } = require("mongoose");

const addressSchema = new Schema({
    name: { type: 'string', required: true},
    address: { type: 'string', required: true},
    pincode: { type: 'number', required: true}
})

const schema = new Schema({
    name: { type: 'string', required: true },
    email: { type: 'string', required: true },
    password: { type: 'string', required: true},
    role: {type: 'string', default:'user'},
    addresses: [addressSchema]
});

module.exports = model('users', schema);