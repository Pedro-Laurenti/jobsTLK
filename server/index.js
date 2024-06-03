const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();

const ImageDetails = require('./image'); // Ensure the path is correct

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json({ limit: '10mb' })); // Adjust the limit if necessary
app.use(cors());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@jobs-tlk.nyn3iqo.mongodb.net/?retryWrites=true&w=majority&appName=Jobs-TLK`;

// Increase Mongoose timeout settings
mongoose.connect(uri, {
    serverSelectionTimeoutMS: 5000, // Increase this value if needed
    socketTimeoutMS: 450000000, // Increase this value if needed
}).then(() => {
    console.log('Successfully connected to MongoDB!');
}).catch(err => {
    console.error('Failed to connect to MongoDB', err);
});

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

        console.log("Successfully connected to MongoDB!");

        // Post a job
        app.post("/post-job", async (req, res) => {
            const body = req.body;
            body.createdAt = new Date();

            if (body.companyLogo && typeof body.companyLogo === 'string') {
                try {
                    // Save the image data in base64 format
                    const imageData = body.companyLogo;
                    const imageDocument = new ImageDetails({ image: imageData });
                    await imageDocument.save();
                    body.companyLogo = imageDocument.image; // Save the image data instead of ID
                } catch (error) {
                    return res.status(500).send({
                        message: "Error saving image",
                        status: false,
                        error: error.message
                    });
                }
            }

            try {
                const result = await jobsCollections.insertOne(body);
                if (result.acknowledged) {
                    return res.status(200).send(result);
                } else {
                    return res.status(404).send({
                        message: "Cannot insert! Try again later",
                        status: false
                    });
                }
            } catch (error) {
                return res.status(500).send({
                    message: "Internal Server Error",
                    status: false,
                    error: error.message
                });
            }
        });

        // Get all jobs
        app.get("/all-jobs", async (req, res) => {
            const jobs = await jobsCollections.find({}).toArray();
            res.send(jobs);
        });

        // Get single job
        app.get("/all-jobs/:id", async (req, res) => {
            const id = req.params.id;
            const job = await jobsCollections.findOne({ _id: new ObjectId(id) });
            res.send(job);
        });

        // Get jobs by email
        app.get("/myJobs/:email", async (req, res) => {
            const jobs = await jobsCollections.find({ postedBy: req.params.email }).toArray();
            res.send(jobs);
        });

        // Delete a job
        app.delete("/job/:id", async (req, res) => {
            const id = req.params.id;
            const filter = { _id: new ObjectId(id) };
            const result = await jobsCollections.deleteOne(filter);
            res.send(result);
        });

        // Update a job
        app.patch("/update-job/:id", async (req, res) => {
            const id = req.params.id;
            const jobData = req.body;
            const filter = { _id: new ObjectId(id) };
            const options = { upsert: true };
            const updateDoc = {
                $set: {
                    ...jobData,
                    updatedAt: new Date(), // Add an update timestamp
                },
            };

            const result = await jobsCollections.updateOne(filter, updateDoc, options);
            res.send(result);
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
    console.log(`Running on "http://localhost:${port}"`);
});