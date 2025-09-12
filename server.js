const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
dotenv.config()
const productsRouter = require('./routes/products.js')

// Middlewares
app.use(cors())
app.use(bodyParser.json())

// Endpoints
app.use(productsRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
