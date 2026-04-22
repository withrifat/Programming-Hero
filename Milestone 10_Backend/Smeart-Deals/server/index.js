const express = require('express');
const cors = require('cors');
require('dotenv').config(); 
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const admin = require("firebase-admin");
const port = process.env.PORT || 3000; 
var serviceAccount = require("./firebase.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

// middleware
app.use(cors());
app.use(express.json());

const logger = (req, res, next) => {
    console.log("logger");
    next();
}
const verifyFireBaseToken = async(req, res, next) =>{
    if(!req.headers.authorization){
        // do not allow to go 
        return res.status(401).send({message: 'unauthorized access'})
    }
    const token = req.headers.authorization.split(" ")[1];
    if(!token){
        return res.status(401).send({message: 'unauthorized access'})
    }
    // verify the token 
    try{
        const userInfo = await admin.auth().verifyIdToken(token);
        console.log("after token validation", userInfo);
        next();
    }
    catch(err){
        return res.status(401).send({message: 'unauthorized access'})
    }
}


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
        // app.get('/bids/myProduct/:productId')

        app.get('/bids', logger, verifyFireBaseToken, async(req, res)=>{
            const email = req.query.email;
            const query = {};
            if(email){
                query.email = email; 
            }

            const cursor = bidsCollection.find(query);
            const result = await cursor.toArray();
            res.send(result);
        });

        // app.post('/bids', async(req, res)=>{
        //     const newBid = req.body;
        //     const result = await bidsCollection.insertOne(newBid);
        //     res.send(result);
        // })
        app.post('/bids', async (req, res) => {
            const newBid = req.body;
            if (newBid.productId) {
                newBid.productId = new ObjectId(newBid.productId);
            }

            const result = await bidsCollection.insertOne(newBid);
            res.send(result);
        });
        app.delete('/bids/:id', async(req, res)=>{
            const id = req.params.id;
            const query = {_id: new ObjectId(id)}
            const result = await bidsCollection.deleteOne(query);
            res.send(result);
        })

        // ---------------------------------------

      // products api start ------------------------------------------------------------
        app.get('/products/bids/:productId', async (req, res) => {
            const productId = req.params.productId;
            
            // এখানে $or ব্যবহার করা হয়েছে যাতে আইডি String বা ObjectId যেভাবেই থাকুক, ডেটা পাওয়া যায়
            const query = {
                $or: [
                    { productId: productId },
                    { productId: new ObjectId(productId) }
                ]
            };

            const cursor = bidsCollection.find(query).sort({ bidAmount: -1 });
            const result = await cursor.toArray();
            res.send(result);
        });
            // latest products
        app.get('/latest-products', async (req, res)=>{
            const cursor = productsCollection.find().sort({created_at: -1}).limit(9);
            const result = await cursor.toArray();
            res.send(result);
        })

        app.get('/products', async (req, res) => {
            // const projectFields = { title: 1 }
            // const cursor = productsCollection.find().sort({ price_min: -1 }).project(projectFields);

            // console.log(req.query)
            // const email = req.query.email;
            // const query = {}
            // if (email) {
            //     query.email = email;
            // }
            // const cursor = productsCollection.find(query);

            const cursor = productsCollection.find();
            const result = await cursor.toArray();
            res.send(result)
        });

        // app.get('/products/:id', async (req, res) => {
        //     const id = req.params.id;
        //     const query = { _id: new ObjectId(id) }
        //     const result = await productsCollection.findOne(query);
        //     res.send(result);
        // })

        app.get('/products/:id', async (req, res) => {
            const id = req.params.id;

            const query = {
                $or: [
                    { _id: id },                
                    { _id: new ObjectId(id) }   
                ]
            };

            const result = await productsCollection.findOne(query);
            res.send(result);
        });


        // app.get('/products/:id', async (req, res) => {
        //     try {
        //         const id = req.params.id;
                
        //         // যেহেতু আপনার ডাটাবেসে ID গুলো স্ট্রিং হিসেবে আছে, 
        //         // তাই সরাসরি id দিয়ে কুয়েরি করলেই ডাটা পাওয়া যাবে।
        //         const query = { _id: id }; 
                
        //         const result = await productsCollection.findOne(query);
                
        //         if (!result) {
        //             return res.status(404).send({ message: 'Product not found in DB' });
        //         }
        //         res.send(result);
        //     } catch (error) {
        //         res.status(500).send({ message: 'Server Error', error });
        //     }
        // });

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