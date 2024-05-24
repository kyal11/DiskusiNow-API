const express = require("express");
const authMiddleware = require("../middleware/auth.middleware");
const userRoutes = require("./user.routes");
const roomRoutes = require("./room.routes");
const slotRoutes = require("./slot.routes");
const bookingRoutes = require("./booking.routes");
const router = express.Router();

router.use(authMiddleware);
router.use("/user", userRoutes);
router.use("/slot", slotRoutes);
router.use("/room", roomRoutes);
router.use("/booking", bookingRoutes);

module.exports = router;
