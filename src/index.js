const express=require("express");
const mongoose=require("mongoose")
const route =require("./routes/route.js")
const {Appconfig}=require('aws-sdk')
const multer =require('multer')
const app=express();


app.use(express.json());
app.use(multer().any())

mongoose.connect("mongodb+srv://sanu12345:sanu12345@cluster0.iukctjm.mongodb.net/group18Database")

.then(()=>console.log("MongoDB is connected"))
.catch((error)=>console.log(error));

app.use("/",route);

app.listen( 3000, function () {
    console.log("Express App Running on Port: 3000");
  });

