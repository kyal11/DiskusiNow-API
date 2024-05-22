const express = require("express");
const authMiddleware = require("../middleware/auth.middleware");
const userRoutes = require("./user.routes");

const router = express.Router();

router.use(authMiddleware);
router.use("/user", userRoutes)


module.exports = router;
