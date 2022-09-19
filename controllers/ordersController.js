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