const express = require('express')

const router = express.Router()

const jobController = require("..//controller/job")

router.post("/api/jobs", jobController.createjob)
router.get("/api/jobs", jobController.listjob)
router.put("/api/jobs/:id", jobController.updatejob)
router.delete("/api/jobs/:id", jobController.deletejob)

module.exports = router