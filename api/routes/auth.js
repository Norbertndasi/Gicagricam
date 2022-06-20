const User = require("../models/User");

const router = require("express").Router();

const cryptoJs = require("crypto-js");
const jwt = require("jsonwebtoken");

//register
router.post("/register", async(req, res)=>{
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password:cryptoJs.AES.encrypt(req.body.password, process.env.PASS_SEC).toString(),

    });
try{
    const savedUser =await newUser.save()
    //console.log(savedUser);
    res.status(201).json(savedUser);

}catch(err){
//console.log(err);
res.status(500).json(err)
}

    
})

router.post("/login", async(req, res)=>{
    try{
        const user = await User.findOne({
            username:req.body.username});
            !user && res.status(401).json("Wrong credentials");

            // const accessToken = jwt.sign({
            //     id:user._id, isAdmin: user.isAdmin
            // },
            // process.env.JWT_SEC,
            // {expiresIn:"3d"}
            // )

            const hashPassword = cryptoJs.AES.decrypt(user.password, process.env.PASS_SEC);

            const password =  hashPassword.toString(cryptoJs.enc.Utf8)
            password !== req.body.password && res.status(401).json("Wrong credentials");

            const accessToken = jwt.sign({
                id:user._id, isAdmin: user.isAdmin
            },
            process.env.JWT_SEC,
            {expiresIn:"3d"}
            )

            const {password2, ...others} = user._doc;

            //res.status(200).json(user);
            res.status(200).json({...others, accessToken});

    }catch(err){
        res.status(500).json(err)
    }
    
})


module.exports = router