const express = require('express')
const { handleGetAllProducts, handleProductsBySearch } = require('../controllers/products.js')

const productsRouter = express.Router()

// Fetching Products
productsRouter.get('/products', handleGetAllProducts)

// Fetching by Search Input
productsRouter.get('/search', handleProductsBySearch)

// Route for only testing
productsRouter.get('/test',(req,res)=>{
    res.status(200).json({ status: 'ok' });
})

module.exports = productsRouter