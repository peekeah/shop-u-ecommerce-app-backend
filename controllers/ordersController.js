const orders = require('../models/ordersModel');

exports.createOrder = async(req, res)  => {
    try {
        const response = await new orders(req.body).save();
        res.send(response)
    } catch (error) {
        console.log(error);
        res.status(403).send(error.message);
    }
}

exports.getOrders = async (req, res) => {
    try {
        const response = await orders.find();
        res.send(response)
    } catch (error) {
        console.log(error);
        res.status(403).send(error.message);
    }
}

exports.getOrdersByEmail = async(req, res) => {
    try {
        const response = await orders.find({ customer_email: req.body.tokenData._doc.email });
        res.send(response);
    } catch (err) {
        console.log(err);
        res.status(403).send(err);
    }
}