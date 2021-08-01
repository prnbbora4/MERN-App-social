const express = require('express');
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authenticate = require("../middleware/authenticate");


require("../db/connection");
const User = require("../model/userSchema");

router.get('/', (req, res) => {
    res.send(`Hello world from the server router js`);
});

// registration using promises
// router.post('/register', (req, res) => {
//     // simple method to display content
//     // console.log(req.body.name);
//     // console.log(req.body.email);
//     // res.json({ message: req.body });

//     // more easy method to display content
//     const {name, email, phone, work, password, cpassword} = req.body;
//     // console.log(name);

//     if(!name || !email || !phone || !work|| !password || !cpassword){
//         return res.status(422).json({error: "fill all the fields"});
//     }

//     User.findOne({email:email})
//     .then( (userExist) => {
//         if(userExist){
//             return res.status(422).json({error: "Email already exist"});
//         }
//         const user = new User({name, email, phone, work, password, cpassword});

//         user.save().then( ()=> {
//             res.status(201).json({message: "user registered"})
//         }).catch((err) => {
//             res.status(500).json({message: "failed to register"})
//         })
//     }).catch(err => {
//         console.log(err);
//     })
// });

// registration using async await
router.post('/register', async (req, res) => {
    // more easy method to display content
    const {name, email, phone, work, password, cpassword} = req.body;
    // console.log(name);

    if(!name || !email || !phone || !work|| !password || !cpassword){
        return res.status(422).json({error: "fill all the fields"});
    }

    try {
        const userExist = await User.findOne({email:email})

        if(userExist){
            return res.status(422).json({error: "Email already exist"});
        }else if(password != cpassword){
            return res.status(422).json({error: "Password not matching"});
        }else{
            const user = new User({name, email, phone, work, password, cpassword});
            await user.save();
            res.status(201).json({message: "user registered"})
        }

        // const userRegister = await user.save()

        // if(userRegister){
        //     res.status(201).json({message: "user registered"})
        // }else{
        //     res.status(500).json({message: "failed to register"})
        // }
        
    } catch (error) {
        console.log(error);
    }
})


// router.get('/signin', (req, res) => {
//     res.send(`Hello Login world from the server`);
// });

// login
router.post('/signin', async (req, res) =>{

    try {
        const {email, password} = req.body;
        if(!email || !password){
            res.status(400).json({message: "Please fill the data"})
        }

        const userLogin = await User.findOne({email:email});
        // console.log(userLogin);


        if(userLogin){
            const isMatch = await bcrypt.compare(password, userLogin.password)

            const token = await userLogin.generateAuthToken();
            console.log(token);

            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true
            });

            if(!isMatch){
                res.status(400).json({error: "Sign in failed"})
            }else{
                res.status(200).json({message: "Sign in succesfully"})
            }
        }else{
            res.status(400).json({error: "Sign in failed"})
        }

        
    } catch (error) {
        console.log(error);
    }

})


router.get('/about', authenticate, (req, res) => {
    console.log(`Hello my About`);
    res.send(req.rootUser);
});

router.post('/contact', authenticate, async (req, res) => {
    // console.log(`Hello my contact`);
    try {
        const {name, email, message} = req.body;

        if(!name || !email || !message){
            return res.json({error: "fill the form"})
       }

       const userContact = await User.findOne({_id : req.UserID})

       if(userContact){
            const userMessage = await userContact.addMessage(name, email, message);

            await userContact.save();

            res.status(200).json({message: "user contact saved"})

       }

    } catch (error) {
        console.log(error);
    }

});

router.get('/getData', authenticate, (req, res) => {
    console.log(`Hello my contact`);
    res.send(req.rootUser);
});

router.get('/logout', (req, res) => {
    console.log(`Hello my logout`);
    res.clearCookie('jwtoken', {
        path: "/"
    });
    res.status(200).send('User logout');
});

module.exports = router;