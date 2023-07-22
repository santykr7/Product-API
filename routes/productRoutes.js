const express = require('express');
const router = express.Router();
const Product = require('../models/product');


//////////////////// to fetch all products/////////////////////
router.get("/products", async(req,res) => {
    try{
        const products = await Product.find({});
        res.status(200).json(products);
    } catch(err) {
        res.status(500).json({message: error.message})
    }
})

//////////////////////////////////// TO FETCH SINGLE PRODUCT///////////////////////

router.get("/products/:id", async (req,res) => {
    try{
        const {id} = req.params
        const product = await Product.findById(id)
        res.status(200).json(product)

    }catch(err) {
        console.log(err.message);
        res.status(500).json({message:err.message})
    }  
})

//////////////////////////////////// TO CREATE PRODUCT///////////////////////

router.post("/products", async (req,res) => {
    try{
        const product = await Product.create(req.body)
        res.status(201).json(product)

    }catch(err) {
        console.log(err.message);
        res.status(500).json({message:err.message})
    }  
})

//////////////////////////////////// TO UPDATE SINGLE PRODUCT///////////////////////


router.put("/products/:id", async (req,res) => {
    try{
        const {id} = req.params
        const product = await Product.findByIdAndUpdate(id,req.body)

        if(!product){
            return res.status(500).json({message: `cannot find ${id}`})
        }
        const updatedProduct = await Product.findById(id)
        res.status(200).json(updatedProduct)

    }catch(err) {
        console.log(err.message);
        res.status(500).json({message:err.message})
    }  
})

/////////////////////////////////// Delete the product ///////////////////////////
router.delete("/products/:id", async (req,res) => {
    try{
        const {id} = req.params;     
        const product = await Product.findByIdAndDelete(id);
        if(!product) {
            res.status(404).json({message:`cannot delete item ${id}`})
        }
        res.status(200).json(product)

    }catch(error) {
        console.log(error.message);
        res.status(500).json({message:error.message})
    }  
})

module.exports = router;
