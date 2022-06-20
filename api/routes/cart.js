//const route = require("color-convert/route");

const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./veriflytoken");
const cryptoJs = require("crypto-js");
const router = require("express").Router();
const Cart = require("../models/Cart");


// router.get("/usertest", (req, res)=>{
//     res.send("user test is successful");
// });

// router.post("/userposttest", (req, res)=>{
//     const username = req.body.username;
//     res.send("your username is: " + username)
// })

//CREATE
router.post('/', verifyToken, async(req, res)=>{
    const newCart = new Products(req.body)

    try {
        const savedCart = await newCart.save();
        res.status(200).json(savedCart);
    } catch (error) {
        res.status(500).json(err)
    }
})


//UPDATE Cart

router.put("/:id", verifyTokenAndAuthorization, async(req, res)=>{
    
    try{
        const updatedCart = await Cart.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new:true});
      
    }catch(err){
        res.status(500).json(err)
    }

})
//DELETE 

router.delete("/:id", verifyTokenAndAuthorization, async(req, res)=>{
    try{
        await Cart.findByIdAndDelete(req.params.id)
        res.status(200).json("Cart has been deleted")

    }catch(err){
        res.status(500).json(err)
    }
})
//GET User Cart
router.get("/find/:userId", verifyTokenAndAuthorization, async(req, res)=>{
    try{
       const cart =  await Cart.findOne({userId: req.params.userId})
        //res.status(200).json(user)

        //const {password2, ...others} = user._doc;

            //res.status(200).json(user);
            res.status(200).json(cart);

    }catch(err){
        res.status(500).json(err)
    }
})

//GET ALL 

router.get("/", verifyTokenAndAdmin, async (req, res) =>{
    try {
        const carts = await Cart.find();
        res.status(200).json(carts)
    } catch (error) {
        res.status(500).json(error)
    }
})




module.exports = router