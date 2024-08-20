const job = require('../model/job')
const createjob = async (req, res) => {
    try {
        const savelastentry = await job.create(req.body)

    } catch (error) {
        res.status(404).send({
            success: false,
            message: error.message,

        })
    }

    res.json({
        success: true,
        message: "job created api"
    })
}
const listjob = async (req, res) => {
    const minsalary = req.query.minsalary
    console.log(minsalary);

    const result = await job.find({
        salary: {
            $gt: minsalary,
        }
    })
    res.json({
        success: true,
        message: "list job api",
        result: result,
    })
}

const updatejob = async (req, res) => {
    /* const result = await job.findByIdAndUpdate(req.params.id, req.body) */
    console.log(req.params.id);

    let updatree = await job.findOneAndUpdate({
        _id: req.params.id,
    }, req.body.salary)


    console.log(updatree);

    res.json({
        success: true,
        message: "update job api"
    })
}

const deletejob = async (req, res) => {
    const deletedatas = await job.findByIdAndDelete(req.params.id)
    console.log(deletedatas);
    res.json({
        success: true,
        message: "delete job api"
    })
}

const jobcontyroller = {
    createjob,
    listjob,
    updatejob,
    deletejob
}

module.exports = jobcontyroller;