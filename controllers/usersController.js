const users = require("../models/userSchema");

exports.getUsers = async (req, res) => {
    try {
        const response = await users.find();
        res.send(response)
    } catch (err) {
        console.log(err);
        res.status(403).send(err.message);
    }
};

exports.getUser = async (req, res) => {
    try {
        const id = req.body.tokenData._doc._id;
        const response = await users.findById(id);
        res.send(response)
    } catch (err) {
        console.log(err);
        res.status(403).send(err.message);
    }
};

exports.updateUser = async (req, res) => {
    try {
        const response = await users.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if(!response) return res.status(403).send({msg : 'User with provoided id not found'});
        res.send(response);
    } catch (err) {
        console.log(err);
        res.status(403).send({ message: "Error while updating" });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const response = await users.deleteOne({ _id: req.params.id });
        res.send(response);
    } catch (err) {
        console.log(err);
        res.status(403).send({ message: "user not found" });
    }
};
