const dotenv = require("dotenv");
const mongoose = require('mongoose');
const express = require('express');
const cookieParser = require("cookie-parser");

const app = express();

dotenv.config({ path: './config.env' });

require('./db/connection');
// const User = require('./model/userSchema');

app.use(express.json());
app.use(cookieParser());
// we link the router files to make our route easy 
app.use(require('./router/auth'));

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
    console.log(`App is listening at http://localhost:${PORT}`);
})