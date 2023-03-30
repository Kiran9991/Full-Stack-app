const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const Users = require('./models/User');

var cors = require('cors');

app.use(cors());

const sequelize = require('./util/database');

// const adminUserRoute = require('./routes/adminUser');

// app.use(adminUserRoute);

app.use(bodyParser.json({ extended: true }));

app.post('/user/add-user', async (req, res, next) => {
    try {
    const name = req.body.name;
    const email = req.body.email;
    const phoneNo = req.body.phoneNo;

    const data = await Users.create( {name: name, email: email, phoneNo: phoneNo} );
    res.status(201).json({newUserDetail: data});
    } catch(err) {
        res.status(500).json({
            error:err
        })
    }
});

app.get('/user/get-users', async (req, res, next) => {
    try {
        const users = await Users.findAll();
        res.status(200).json({allUsers: users});
    }catch(error) {
        console.log('Get users is failing', JSON.stringify(error))
        res.status(500).json({error: error})
    }
})

sequelize.sync().then(result => {
    // console.log(result);
}).catch(err => {
    console.log(err);
})

app.listen(5000);


