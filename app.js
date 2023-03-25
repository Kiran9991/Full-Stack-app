const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const sequelize = require('./util/database');

const adminUserRoute = require('./routes/adminUser');

app.use(adminUserRoute);

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/',(req, res) => {
    res.send('Welcome to Home page')
})


sequelize.sync().then(result => {
    // console.log(result);
}).catch(err => {
    console.log(err);
})

app.listen(5000);