const Product=require("../models/product")
const router=require("express").Router();

router.post("/create", async (req, res) => {
    try {
        const allProducts=await Product.find();
        const existingItem=allProducts.find((itm)=>itm.id===req.body.id);
        if(existingItem){
            return res.json({msg:"book is already exists"});
        }
        const product = new Product(req.body);
        const saveProduct = await product.save();
        res.status(200).json({saveProduct,msg:"successfully added"});
        
    } catch (error) {
        return res.status(500).json(error);
    }
});



router.get("/getlist",async(req,res)=>{
    try {
       const allProducts=await Product.find().select("-__v");
        return res.status(200).json(allProducts);
    } catch (error) {
        return res.status(500).json(error);
    }
});

router.put("/updateBook/:id", async (req, res) => {
    const id = req.params.id;

    try {
        const updatedBook = await Product.findOneAndUpdate(
            { _id: id },
            req.body,
            { new: true } 
        );

        if (updatedBook) {
            return res.status(200).json(updatedBook);
        }

        return res.status(404).json({ error: "Product not found" });
    } catch (error) {
        return res.status(500).json(error);
    }
});

  



router.delete("/deleteFromList/:bookId", async (req, res) => {
    const bookId = req.params.bookId;

    try {
        const product = await Product.findByIdAndDelete(bookId);
        return res.status(200).json({msg:"successfully deleted"});
    } catch (error) {
        return res.status(500).json(error);
    }
});


module.exports=router;