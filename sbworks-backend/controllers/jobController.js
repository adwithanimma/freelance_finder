const Job = require("../models/Job");
const User = require("../models/User");

exports.createJob = async (req, res) => {
  const { title, description, budget } = req.body;

  try {
    const user = await User.findById(req.user.id);

    if (!user || user.role !== "client") {
      return res.status(403).json({
        message: "Only clients can post jobs",
      });
    }

    const job = await Job.create({
      title,
      description,
      budget,
      client: req.user.id,
      applications: [], // ✅ ensure field exists
    });

    res.status(201).json(job);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getJobs = async (req, res) => {
  try {
    const jobs = await Job.find().populate("client", "name email");
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.applyJob = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    const user = await User.findById(req.user.id);

    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    if (!user || user.role !== "freelancer") {
      return res.status(403).json({
        message: "Only freelancers can apply for jobs",
      });
    }

    if (!job.applications) {
      job.applications = [];
    }

    const alreadyApplied = job.applications.some(
      (app) => app.freelancer.toString() === req.user.id
    );

    if (alreadyApplied) {
      return res.status(400).json({
        message: "You have already applied for this job",
      });
    }

    job.applications.push({ freelancer: req.user.id });
    await job.save();

    res.json({ message: "Applied successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};