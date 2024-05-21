const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;
require('dotenv').config();

// Middleware
app.use(express.json());
app.use(cors());

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@jobs-tlk.nyn3iqo.mongodb.net/?retryWrites=true&w=majority&appName=Jobs-TLK`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
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

        const db = client.db("JobsTLK");
        const jobsCollections = db.collection("Jobs-TLK");

        // Send a ping to confirm a successful connection (optional)
        await client.db("admin").command({ ping: 1 });
        console.log("Conectado com sucesso ao MongoDB!");

        // Post a job
        app.post("/post-job", async (req, res) => {
            const body = req.body;
            body.createAt = new Date();

            const result = await jobsCollections.insertOne(body);
            if (result.acknowledged) {
                return res.status(200).send(result);
            } else {
                return res.status(404).send({
                    message: "Cannot insert! Try again later",
                    status: false
                });
            }
        });

        // Get all jobs
        app.get("/all-jobs", async (req, res) => {
            const jobs = await jobsCollections.find({}).toArray();
            res.send(jobs);
        });

    } catch (err) {
        console.error("Failed to connect to MongoDB", err);
    }
}

run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('Hello dev!');
});

app.listen(port, () => {
    console.log(`Rodando na porta "http://localhost:${port}"`);
});