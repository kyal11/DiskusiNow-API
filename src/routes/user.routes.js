const express = require("express");
const userController = require("../controller/user.controller");
const {registerValidator} = require("../middleware/request.validator")
const router = express.Router();

router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUserById);
router.get("/history", userController.getUserHistoryBooking);
router.get("/email/:email", userController.getUserByEmail); 
router.post("/",registerValidator, userController.createUser);
router.put("/:id",registerValidator, userController.updateUser);
router.delete("/:id", userController.deleteUser);
module.exports = router;
