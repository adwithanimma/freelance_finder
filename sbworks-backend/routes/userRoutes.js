
const express = require("express");
const { protect, authorize } = require("../middleware/authMiddleware");
const userController = require("../controllers/userController");
console.log(userController);
const router = express.Router();

router.get("/profile", protect, userController.getProfile);
router.put("/profile", protect, userController.updateProfile);

router.get("/", protect, authorize("admin"), userController.getAllUsers);
router.put("/:id/block", protect, authorize("admin"), userController.blockUser);
router.delete("/:id", protect, authorize("admin"), userController.deleteUser);

module.exports = router;