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

exports.updateUser = async (req, res) => {
    try {
        const response = await users.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        res.send(response);
    } catch (err) {
        console.log(err);
        res.status(403).send({ message: "user not found" });
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
