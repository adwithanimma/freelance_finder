const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  blockUser,
  unblockUser,
  getAllJobs,
} = require("../controllers/adminController");

const { protect } = require("../middleware/authMiddleware");

router.get("/users", protect, getAllUsers);

router.put("/users/:userId/block", protect, blockUser);

router.put("/users/:userId/unblock", protect, unblockUser);

router.get("/jobs", protect, getAllJobs);

module.exports = router;