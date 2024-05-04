const express = require('express')
const app = express()
const cors = require('cors');
const port = process.env.PORT || 6100;
require('dotenv').config()

// middleware
app.use(cors());
app.use(express.json());

// mongodb config
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@tasteofceylon-cluster.d6xpd7e.mongodb.net/?retryWrites=true&w=majority&appName=TasteOfCeylon-Cluster`;

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

    // databse & collectins
    const menuCollections = client.db("tasteofceylon-client").collection("menu");
    const cartCollections = client.db("tasteofceylon-client").collection("cartItems");

    // all menu items operations
    app.get('/menu', async(req, res) => {
      const result = await menuCollections.find().toArray();
      res.send(result);
    })


    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})