const products = require("../models/productModel");

exports.getProducts = async (req, res) => {
    try {
        const response = await products.find({});
        res.send(response);
    } catch (err) {
        console.log(err);
        res.status(403).send(err.message);
    }
};

exports.createProduct = async (req, res) => {
    try {
        const response = await new products(req.body).save();
        res.send(response);
    } catch (err) {
        console.log(err);
        res.status(403).send(err.message);
    }
};

exports.updateProduct = async (req, res) => {
    try {
        const response = await products.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.send(response);
    } catch (err) {
        console.log(err);
        res.status(403).send(err.message);
    }
}

exports.deleteProduct = async (req, res) => {
    try {
        const response = await products.deleteOne({_id: req.params.id});
        res.send(response);
    } catch (err) {
        console.log(err);
        res.status(403).send(err.message);
    }
}