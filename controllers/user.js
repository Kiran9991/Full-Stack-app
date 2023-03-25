const Users = require('../models/User');

exports.postAddUser = (req, res, next) => {
    res.send('welcome!')
    const name = req.body.name;
    const email = req.body.email;
    const phoneNo = req.body.phoneNo;
    Users.create({
        name: name,
        email: email,
        phoneNo: phoneNo
    })
    .then(result => {
        console.log(result);
        console.log('the user object is created');
    })
    .catch(err => console.log(err))
}