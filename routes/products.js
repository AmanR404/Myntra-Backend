const express = require('express')
const { handleGetAllProducts, handleProductsBySearch } = require('../controllers/products.js')

const productsRouter = express.Router()

// Fetching Products
productsRouter.get('/products', handleGetAllProducts)

// Fetching by Search Input
productsRouter.get('/search', handleProductsBySearch)

module.exports = productsRouter