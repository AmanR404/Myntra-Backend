const { MongoClient } = require('mongodb')

async function connectDb(){
    const url = process.env.DATABASE_URL
    const dbName = "myntra"

    const client = new MongoClient(url)
    await client.connect()
    db = client.db(dbName)
    console.log("Database Connected")

    return client.db(dbName)
}

module.exports = { connectDb }
