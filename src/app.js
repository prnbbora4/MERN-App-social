const dotenv = require("dotenv");
const mongoose = require('mongoose');
const express = require('express');
const app = express();

dotenv.config({ path: './config.env' });

require('./db/connection');
// const User = require('./model/userSchema');

app.use(express.json());

// we link the router files to make our route easy 
app.use(require('./router/auth'));

const PORT = process.env.PORT || 5000;


// // Middelware 
// const middleware = (req,res, next) => {
//     console.log(`Hello my Middleware`);
//     next();
// }


// app.get('/about', middleware, (req, res) => {
//     console.log(`Hello my About`);
//     res.send(`Hello About world from the server`);
// });

// app.get('/contact', (req, res) => {
//     res.send(`Hello Contact world from the server`);
// });


// app.get('/signup', (req, res) => {
//     res.send(`Hello Registration world from the server`);
// });

app.listen(PORT, () => {
    console.log(`App is listening at http://localhost:${PORT}`);
})