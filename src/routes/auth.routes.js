const express = require("express")
const authController = require("../controller/auth.controller");
const {registerValidator, loginValidator} = require("../middleware/request.validator")

const router = express.Router();

router.post("/register", registerValidator, authController.register);
router.post("/login", loginValidator, authController.login);
router.delete("/logout", authController.logout);

module.exports = router;