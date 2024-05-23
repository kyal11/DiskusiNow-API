const express = require("express");
const slotController = require("../controller/slot.controller");
const router = express.Router();

router.get('/', slotController.getAllSlots);
router.get('/:id', slotController.getSlotById);
router.post('/', slotController.createSlot);
router.put('/:id', slotController.updateSlot);
router.delete('/:id', slotController.deleteSlot);


module.exports = router;