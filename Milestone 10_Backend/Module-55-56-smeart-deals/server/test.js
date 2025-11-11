const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express();
const port = process.env.PORT || 3000;

// middleware
app.use(cors());
app.use(express.json());

const uri = "localhost:27017";
// const uri = "mongodb+srv://admin:t1Yn8xnDa57LtdBkt1Yn8xnDa57LtdBk@withrifat.onpudgz.mongodb.net/?appName=withrifat";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();

    const db = client.db('smart_db');
    const productsCollection = db.collection('products');

    app.get('/', (req, res) => {
      res.send('Smart server is running');
    });

    // ✅ POST route (add new product)
    app.post('/products', async (req, res) => {
      const newProduct = req.body;
      const result = await productsCollection.insertOne(newProduct);
      res.send(result);
    });

    // ✅ GET route (fetch all products)
    app.get('/products', async (req, res) => {
      const result = await productsCollection.find().toArray();
      res.send(result);
    });

    await client.db("admin").command({ ping: 1 });
    console.log("✅ MongoDB connected successfully!");

    app.listen(port, () => {
      console.log(`🚀 Smart server is running on port: ${port}`);
    });

  } catch (error) {
    console.error("❌ MongoDB connection failed:", error);
  }
}

run().catch(console.dir);
