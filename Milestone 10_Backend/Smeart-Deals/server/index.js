const express = require('express');
const cors = require('cors');
require('dotenv').config(); 
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = process.env.PORT || 3000; 

// middleware
app.use(cors());
app.use(express.json());

// mongodb uri
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@withrifat.onpudgz.mongodb.net/?retryWrites=true&w=majority&appName=withrifat`;
// const uri = "mongodb://localhost:27017/";



const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
    try {
        // কানেকশন চেক
        await client.connect(); // প্রোডাকশনে অনেক সময় এটি প্রয়োজন হয় না

        const db = client.db('smart_db');
        const productsCollection = db.collection('products');
        const bidsCollection = db.collection('bids');
        const usersCollection = db.collection('users');


        // users Collection API
        app.post('/users', async(req, res)=>{
            const newUser = req.body;
            // if user already exists then do not insert again
            const email = req.body.email;
            const query = {email: email};
            const existingUser = await usersCollection.findOne(query);
            if(existingUser){
                res.send({message: 'user already exists'});
            } else{  //otherwise insert the new user 
                const result = await usersCollection.insertOne(newUser);
                res.send(result);
            }

        })
        app.get('/users', async(req, res)=>{
            const cursor = usersCollection.find();
            const result = await cursor.toArray();
            res.send(result);
        })
        app.delete('/users/:id', async(req, res)=>{
            const id = req.params.id;
            const query = {_id: new ObjectId(id)}
            const result = await usersCollection.deleteOne(query);
            res.send(result);
        })

        // bids related apis ----------------------------------
        app.get('/bids', async(req, res)=>{
            const email = req.query.email;
            const query = {};
            if(email){
                query.buyer_email = email;
            }

            const cursor = bidsCollection.find(query);
            const result = await cursor.toArray();
            res.send(result);
        })

        app.post('/bids', async(req, res)=>{
            const newBid = req.body;
            const result = await bidsCollection.insertOne(newBid);
            res.send(result);
        })
        app.delete('/bids/:id', async(req, res)=>{
            const id = req.params.id;
            const query = {_id: new ObjectId(id)}
            const result = await bidsCollection.deleteOne(query);
            res.send(result);
        })

        // ---------------------------------------

      // products api start ------------------------------------------------------------
        app.get('/products', async (req, res) => {
            // const projectFields = { title: 1 }
            // const cursor = productsCollection.find().sort({ price_min: -1 }).project(projectFields);

            console.log(req.query)
            const email = req.query.email;
            const query = {}
            if (email) {
                query.email = email;
            }

            const cursor = productsCollection.find(query);
            const result = await cursor.toArray();
            res.send(result)
        });

        app.get('/products/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) }
            const result = await productsCollection.findOne(query);
            res.send(result);
        })

        app.post('/products', async (req, res) => {
            const newProduct = req.body;
            const result = await productsCollection.insertOne(newProduct);
            res.send(result);
        })

        app.patch('/products/:id', async (req, res) => {
            const id = req.params.id;
            const updatedProduct = req.body;
            const query = { _id: new ObjectId(id) }
            const update = {
                $set: {
                    name: updatedProduct.name,
                    price: updatedProduct.price
                }
            }

            const result = await productsCollection.updateOne(query, update)
            res.send(result)
        })

        app.delete('/products/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) }
            const result = await productsCollection.deleteOne(query);
            res.send(result);
        })
        //  end products api
        await client.db("admin").command({ ping: 1 });
        console.log("Successfully connected to MongoDB!");

    } finally {
        // কানেকশন বন্ধ করবেন না যদি সার্ভার রানিং রাখতে চান
    }
}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('Smart server is running');
});



app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});