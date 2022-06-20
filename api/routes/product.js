//const route = require("color-convert/route");

const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./veriflytoken");
const cryptoJs = require("crypto-js");
const router = require("express").Router();
const Products = require("../models/Product");


// router.get("/usertest", (req, res)=>{
//     res.send("user test is successful");
// });

// router.post("/userposttest", (req, res)=>{
//     const username = req.body.username;
//     res.send("your username is: " + username)
// })

//CREATE
router.post('/', verifyTokenAndAdmin, async(req, res)=>{
    const newProducts = new Products(req.body)

    try {
        const savedProduct = await newProducts.save();
        res.status(200).json(savedProduct);
    } catch (error) {
        res.status(500).json(err)
    }
})


//UPDATE Product

router.put("/:id", verifyTokenAndAdmin, async(req, res)=>{
    
    try{
        const updatedProduct = await Products.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new:true});
        res.status(200).json(updatedProduct);
        console.log("update user");
    }catch(err){
        res.status(500).json(err)
    }

})
//DELETE 

router.delete("/:id", verifyTokenAndAdmin, async(req, res)=>{
    try{
        await Products.findByIdAndDelete(req.params.id)
        res.status(200).json("Product has been deleted")

    }catch(err){
        res.status(500).json(err)
    }
})
//GET Product
router.get("/find/:id", async(req, res)=>{
    try{
       const product =  await Products.findById(req.params.id)
        //res.status(200).json(user)

        //const {password2, ...others} = user._doc;

            //res.status(200).json(user);
            res.status(200).json(product);

    }catch(err){
        res.status(500).json(err)
    }
})

//GET ALL Products
router.get("/", async(req, res)=>{
    const qNew = req.query.new;
    const qCatigory = req.query.catigory;
    try{
        let products;

        if(qNew){
            products = await Products.find().sort({createdAt: -1}).limit(5)
        }else if(qCatigory){
            products = await Products.find({categoris:{
                $in: [qCatigory],
            }})
        }else{
            products = await Products.find();
        }
    //    const users = query ? await User.find().sort({_id: -1}).limit(5) : await User.find()
        //res.status(200).json(user)

        //const {password2, ...others} = user._doc;

            //res.status(200).json(user);
            res.status(200).json(products);

    }catch(err){
        res.status(500).json(err)
    }
})




module.exports = router