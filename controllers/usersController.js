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
        const id = req.body.tokenData._doc._id;

        // converting mobile no into number
        if(req.body.mobile_no) {
            req.body.mobile_no = parseInt(req.body.mobile_no);
        }

        const response = await users.findByIdAndUpdate(id, req.body, {
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
        const id = req.body.tokenData._doc._id;
        const response = await users.deleteOne({ _id: id });
        res.send(response);
    } catch (err) {
        console.log(err);
        res.status(403).send({ message: "user not found" });
    }
};

exports.addAddress = async (req, res) => {
    try {
        const id = req.body.tokenData._doc._id;
        const response = await users.findOne({ _id: id});
        let addresses = response.addresses;
        addresses.push(req.body);
        response.save();
        res.send(response);
    } catch (err) {
        console.log(err);
        res.status(403).send({ message: err.message });
    }
}

exports.deleteAddress = async (req, res) => {
    try {
        const userId = req.body.tokenData._doc._id;
        const addressId = req.params.id;
        const response = await users.findOne({ _id: userId });

        // deleting address from db
        let addresses = response.addresses;
        addresses = addresses.filter(s => s._id.toString() !== addressId.toString());
        response.addresses = addresses;
        await response.save();

        res.send({ msg: 'Successfully deleted' });

    } catch (err) {
        console.log(err);
        res.status(403).send({ message: err.message });
    }
}