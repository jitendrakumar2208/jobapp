const express = require('express')
const mongoose = require('mongoose');

const app = express();

const jobRoutes = require(".//routes/job")

mongoose.connect("mongodb+srv://1802367ececec:hHbm8G2CFItp321u@cluster0.vv5ry2k.mongodb.net/")
    .then(() => console.log("DB connection established")
    )
    .catch((error) => console.log("Error connecting to", error))
app.use(express.json())
app.use(jobRoutes)


app.listen(10000, () => console.log("server is running on 1000 port"))
