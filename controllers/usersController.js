exports.getUsers = async(req, res) => {
    console.log('hello from getUsers');
    res.send({
        msg: 'hello from getUsers'
    })
}