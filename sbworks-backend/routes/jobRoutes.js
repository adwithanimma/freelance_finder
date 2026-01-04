const express = require("express");
const router = express.Router();

const {
  createJob,
  getJobs,
  applyJob, 
} = require("../controllers/jobController");

const protect = require("../middleware/authMiddleware");

router.post("/:id/apply", protect, applyJob);

router.post("/", protect, createJob);

router.get("/", getJobs);

module.exports = router;