const express = require('express')
const cors = require('cors')
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express()
const port = 3000

//  recourse sheering 
app.use(cors({

}))
//  when data come we give permission with this 
app.use(express.json())
// mongo db part 
const uri = "mongodb+srv://devrifathossain:t1Yn8xnDa57LtdBk@test.lr2ztxa.mongodb.net/?appName=Test";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
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

    const db = client.db('model-db');
    const modelCollection = db.collection('models');

    app.get('/models', async (req, res) => {
      const result = await modelCollection.find().toArray();
      res.send(result);
    });

    console.log("MongoDB connected successfully!");
  } catch (error) {
    console.error(error);
  }
}

run().catch(console.dir);


app.get('/', (req, res) => {
  res.send('Hello World after nodemon')
})
app.get('/hi', (req, res) => {
  res.send('How are you ')
})

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
