const users = require("../models/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
    try {

        //User validation
        const existUser = await users.findOne({ email: req.body.email });
        if(existUser) return res.status(404).json({ message: "You are already registered user"});

        //Hashing password
        const salt = await bcrypt.genSalt(7);
        const password = await bcrypt.hash(req.body.password, salt);
        req.body.password = password;

        // converting mobile no to number
        if(req.body.mobile_no) {
            req.body.mobile_no = parseInt(req.body.mobile_no);
        }

        //Storing data into Database
        const response = await new users(req.body).save();

        //Generating Token
        const token = jwt.sign({ ...response }, process.env.JWT_SECRET, { expiresIn: '1d' });
        res.send(token);

    } catch (err) {
        console.log(err);
        res.status(403).send(err.message);
    }
};


exports.signin = async (req, res) => {
    try {

        //User validation
        const existUser = await users.findOne({ email: req.body.email });
        if(!existUser) return res.status(404).json({ message: "User not found"});

        //Password validation
        const isValid = await bcrypt.compare(req.body.password, existUser.password);
        if(!isValid) return res.status(404).json({ message: "Password didn't match"});

        //Generating Token
        const token = jwt.sign({ ...existUser}, process.env.JWT_SECRET, {expiresIn: '1d'});
        res.send(token);

    } catch (err) {
        console.log(err.message);
        res.status(403).send(err.message)
    }
};

