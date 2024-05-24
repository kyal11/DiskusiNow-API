const express = require("express");
const slotController = require("../controller/slot.controller");
const router = express.Router();
const {slotValidator} = require("../middleware/request.validator");

router.get('/', slotController.getAllSlots);
router.get('/:id', slotController.getSlotById);
router.post('/', slotValidator, slotController.createSlot);
router.put('/:id', slotValidator,slotController.updateSlot);
router.delete('/:id', slotController.deleteSlot);


module.exports = router;