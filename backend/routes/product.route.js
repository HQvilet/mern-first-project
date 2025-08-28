import Product from '../models/product.model.js';
import express from 'express';

const router = express.Router();

// Create a new product
router.post('/', async (req, res) => {
    const product = req.body;
    console.log("Received product:", product);
    if(!product.name || !product.price) {
        return res.status(400).json({success:false, message: "Invalid data." });
    }
    try {
        const product = new Product(req.body);
        await product.save();
        res.status(201).json({success:true, data:product});
    } catch (error) {
        res.status(400).json({success:false, message: error});
    }
});

router.get('/', async (req, res) => {
    console.log('fetch products');
    try {
        const products = await Product.find({});
        res.status(200).json({success:true, data:products});
    } catch (error) {
        res.status(500).json({success:false, message: error});
    }
});

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findByIdAndUpdate(id, req.body, { new: true });
        if (!product) { 
            return res.status(404).json({success:false, message: "Product not found." });
        }
        res.status(200).json({success:true, data:product});
    } catch (error) {
        res.status(400).json({success:false, message: error});
    }
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findByIdAndDelete(id);
        if (!product) {
            return res.status(404).json({success:false, message: "Product not found." });
        }
        res.status(200).json({success:true, data:product});
    } catch (error) {
        res.status(400).json({success:false, message: error});
    }
});

export default router;