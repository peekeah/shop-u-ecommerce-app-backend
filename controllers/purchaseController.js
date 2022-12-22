const purchase = require('../models/purchaseModel');


exports.createPurchase = async(req, res) => {
    try {

        const response = await new purchase(req.body).save();
        console.log(req.body)
        res.send(response);
    } catch (err) {
        console.log(err);
        res.status(403).send(err);
    }
}