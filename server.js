import express from 'express'
const app = express()
const port = 3000
import cors from 'cors'
import bodyParser from 'body-parser'
import { MongoClient } from 'mongodb'
import dotenv from 'dotenv'
dotenv.config()

// Database Connection
const url = process.env.DATABASE_URL
const client = new MongoClient(url)

const dbName = "myntra"
client.connect()

// Middlewares
app.use(cors())
app.use(bodyParser.json())

// Endpoints

// Fetching Products
app.get('/products', async (req, res) => {
  try {
    const db = client.db(dbName)
    const collection = db.collection('products')
    const products = await collection.find({}).toArray()
    res.send(products)
  }
  catch (error) {
    res.status(500).send({ error: "Failed to Fetch Products", details: error.message })
  }
})

// Fetching by Search Input
app.get('/search', async (req, res) => {
  try {
    const searchText = req.query.search || ""
    const db = client.db(dbName)
    const collection = db.collection('products')
    const products = await collection.find({ title: { $regex: searchText, $options: 'i' } }).toArray()
    res.send(products)
  }
  catch (error) {
    res.status(500).send({ error: "Failed to Fetch Products", details: error.message })
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
