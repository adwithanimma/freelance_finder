const express = require("express");
const router = express.Router();

const {
  createReview,
  getReviewsForFreelancer,
} = require("../controllers/reviewController");

const { protect } = require("../middleware/authMiddleware");

router.post("/", protect, createReview);

router.get("/freelancer/:freelancerId", getReviewsForFreelancer);

module.exports = router;