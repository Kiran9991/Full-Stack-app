// const Users = require('../models/User');

// exports.postAddUser = (req, res, next) => {
    
//     const name = req.body.name;
//     const email = req.body.email;
//     const phoneNo = req.body.phoneNo;

//     Users.create({
//         name: name,
//         email: email,
//         phoneNo: phoneNo
//     }).then(result => {
//         console.log(result);
//         res.status(201).json({newUserDetail: Users});
//     }).catch(err => {
//         console.log(err);
//     })
// }
    

// exports.getAddUser = async (req, res, next) => {
//     try {
//         const users = await Users.findAll();
//         res.status(200).json({allUser: users});
//     }catch(error) {
//         console.log('Get user is failing', JSON.stringify(error))
//         res.status(500).json({error: error})
//     }
// }