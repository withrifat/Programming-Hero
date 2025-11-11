const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const app = express();
const port = process.env.PORT || 3000;

// middleware
app.use(cors());
app.use(express.json());

// ✅ Local MongoDB URI
const uri = 'mongodb://127.0.0.1:27017';

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();

    const db = client.db('smart_db');
    const productsCollection = db.collection('products');

    app.get('/', (req, res) => {
      res.send('Smart server is running');
    });

    app.get('/products', async(req, res)=>{
      const cursor = productsCollection.find();
      const result = await cursor.toArray();
      res.send(result)
    })
    // find one 
    app.get('/products/:id', async(req, res)=>{
      const id = req.params.id;
      const query = { _id: new ObjectId(id)}
      const result = await productsCollection.findOne(query);
      res.send(resultf)
    })

    app.post('/products', async (req, res) => {
      const newProduct = req.body;
      const result = await productsCollection.insertOne(newProduct);
      res.send(result);
    });

    app.get('/products', async (req, res) => {
      const result = await productsCollection.find().toArray();
      res.send(result);
    });
    app.patch('/products/:id', async (req, res) => {
      const id = req.params.id;
      const updatedData = req.body;
      const query = { _id: new ObjectId(id) };

      const update = {
        $set: updatedData
      };

      const result = await productsCollection.updateOne(query, update);
      res.send(result);
    });


    app.delete('/products/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) }
      const result = await productsCollection.deleteOne(query);
      res.send(result);
    });

    await client.db('admin').command({ ping: 1 });
    console.log('✅ MongoDB connected successfully!');

    app.listen(port, () => {
      console.log(`🚀 Smart server is running on port: ${port}`);
    });
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error);
  }
}

run().catch(console.dir);
