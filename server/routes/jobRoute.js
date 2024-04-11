
const { getAllJob, addJob } = require("../controllers/jobController");
const express = require("express");
const { isAuthenticatedUser } = require("../middlewares/auth");

const router = express.Router();

router.get('/jobs', getAllJob);
//add job route
router.post('/addJob', addJob);



module.exports = router; 