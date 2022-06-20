const express = require("express");
const app = express();
const mongoose = require("mongoose")
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");

const userRoute = require("./routes/user");
const productRoute = require("./routes/Product");
const orderRoute = require("./routes/order");
const cartRoute = require("./routes/cart");
const cors = require("cors");

app.use(cors())

dotenv.config();

mongoose.connect(
    process.env.MONGO_URL
).then(()=>console.log("DB Connection Successful")).catch((err)=>{
    console.log(err);
});

app.get("/api/test", ()=>{
    console.log("test is successful");
})

app.use(express.json())
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/orders", orderRoute);
app.use("/api/cart", cartRoute);



app.listen(process.env.PORT || 5000, ()=>{
    console.log("Backend sever is runing");
})