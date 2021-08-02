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

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('./Client/build'));
    const path = require("path");
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'Client', 'build', 'index.html'));
        console.log(__dirname);

    })
}

app.listen(PORT, () => {
    console.log(`App is listening at http://localhost:${PORT}`);
})