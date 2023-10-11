const express=require("express");
const app=express();
const mongoose=require("mongoose");
const dotenv=require("dotenv");
dotenv.config();
const productRoute=require("./routes/product");
const cors=require("cors");


app.use(cors({
   credentials: true,
}));



mongoose.connect(process.env.MONGODB)
.then(()=>console.log("database connected"))
.catch((err)=>console.log(err));

app.use(express.json());
app.use("/book",productRoute); 

app.listen( 5000,()=>{
    console.log("listening");
})