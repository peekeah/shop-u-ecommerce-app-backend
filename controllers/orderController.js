const orders = require('../models/orderModel');


exports.createPurchase = async(req, res) => {
    try {
        const orderData = {
            customer_name: req.body.tokenData._doc.name,
            customer_email: req.body.tokenData._doc.email,
            ...req.body
        }
        
        const response = await new orders(orderData).save();
        res.send(response);
    } catch (err) {
        console.log(err);
        res.status(403).send(err);
    }
}

exports.userPurchase = async(req, res) => {
    try {
        const email = req.body.tokenData._doc.email;
        const response = await orders.find({ customer_email: email });
        res.send(response);
    } catch (err) {
        console.log(err);
        res.status(403).send(err);
    }
}