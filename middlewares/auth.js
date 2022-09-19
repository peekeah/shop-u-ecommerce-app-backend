const jwt = require("jsonwebtoken");

//User Authentication
exports.authenticateToken = async (req, res, next) => {
    //Validating token in headers
    if (!req.headers["access-token"])
        return res.status(401).send({ message: "Unauthorize token not found" });

    //Token verification
    try {
        req.body.tokenData = jwt.verify(req.headers["access-token"], process.env.JWT_SECRET);
        next();
    } catch (err) {
        res.status(401).send({ message: "Invalid token" });
    }
};

//User Authorization
exports.authorizeUser = async (req, res, next) => {
    if (req.body.tokenData._doc.role === "admin") {
        next();
    } else {
        return res.status(401).send({ message: "You are not admin" });
    }
};
