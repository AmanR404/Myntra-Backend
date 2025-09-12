// Database Connection
const {connectDb} = require('../connection.js')

async function handleGetAllProducts(req,res) {
    try {
        const db = await connectDb()
        const collection = db.collection('products')
        const products = await collection.find({}).toArray()
        return res.status(200).send(products)
      }
      catch (error) {
        return res.status(500).send({ error: "Failed to Fetch Products", details: error.message })
      }
}

async function handleProductsBySearch(req,res){
    try {
    const searchText = req.query.search || ""
    const db = await connectDb()
    const collection = db.collection('products')
    const products = await collection.find({ title: { $regex: searchText, $options: 'i' } }).toArray()
    return res.status(200).send(products)
  }
  catch (error) {
    return res.status(500).send({ error: "Failed to Fetch Products", details: error.message })
  }
}

module.exports = {handleGetAllProducts, handleProductsBySearch}