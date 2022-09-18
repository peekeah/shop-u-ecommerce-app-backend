exports.getProducts = async (req, res) => {
    console.log("hello from getProducts");
    res.send({
        msg: "hello from getProducts",
    });
};
