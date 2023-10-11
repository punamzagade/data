const mongoose  = require("mongoose");

const BookSchema = new mongoose.Schema({
 
    author: { type: String, required: true },
    country: { type: String, },
    language:{ type: String, },
    link: { type: String,  },
    pages: { type: String, },
    title: { type: String, required: true },
    year:{ type: String, },
    id:{ type: Number, required: true },
},
//  { timestamps: true }
 );


module.exports=mongoose.model("Book",BookSchema);