const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;
require('dotenv').config();

// Middleware
app.use(express.json());
app.use(cors());

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
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

        // Generate a unique numeric ID
        async function generateUniqueNumericId() {
            let isUnique = false;
            let newId;

            while (!isUnique) {
                newId = Math.floor(Math.random() * 1000000000); // Generate a random numeric ID
                const existingJob = await jobsCollections.findOne({ _id: newId });
                if (!existingJob) {
                    isUnique = true;
                }
            }

            return newId;
        }

        // Post a job
        app.post("/post-job", async (req, res) => {
            const body = req.body;
            body.createAt = new Date();
            body._id = await generateUniqueNumericId();

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
        
        // Get single jobs
        app.get("/all-jobs/:id", async (req, res) => {
            const id = parseInt(req.params.id, 10);
            const job = await jobsCollections.findOne({ _id: id });
            res.send(job)
        })


        // get jobs by email
        app.get("/myJobs/:email", async(req,res) =>{
            // console.log(req.params.email)
            const jobs = await jobsCollections.find({postedBy : req.params.email}).toArray();
            res.send(jobs);
        })

        // delete a job
        app.delete("/job/:id", async (req, res) => {
            const id = req.params.id; // Corrected typo from 'req.params.is' to 'req.params.id'
            const filter = { _id: new ObjectId(id) }; // Create an ObjectId from the string id
            const result = await jobsCollections.deleteOne(filter);
            res.send(result);
        });

        //UPDATE A JOB

        app.patch("/update-job/:id", async(req,res) =>{
            const id = req.params.id;
            const jobData = req.body;
            const filter = { _id: new ObjectId(id) };
            const options = { upsert: true };
            const updateDoc = {
                $set:{
                    ...jobData
                },
            };

            const result = await jobsCollections.updateOne(filter, updateDoc, options );
            res.send(result)
        })

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