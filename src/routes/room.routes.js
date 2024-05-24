const express = require("express");
const roomController = require("../controller/room.controller");
const {roomValidator} = require("../middleware/request.validator")
const router = express.Router();

router.get("/", roomController.getAllRooms);
router.get("/:id", roomController.getRoomById);
router.post("/", roomValidator, roomController.createRoom);
router.put("/:id", roomValidator, roomController.updateRoom);
router.delete("/:id", roomController.deleteRoom);

module.exports = router;
