const mongoose = require('mongoose');
const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String
    },
    company: {
        type: String
    },
    location: {
        type: String
    },
    salary: {
        type: Number
    }
})

const job = mongoose.model("jobsdata", jobSchema)
module.exports = job