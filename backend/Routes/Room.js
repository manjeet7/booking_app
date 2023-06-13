const express = require("express");
const router = express.Router();
const roomController = require("../Controllers/room");

router.route("/:hotelId").post(roomController.createRoom);
router.route("/").get(roomController.getRooms);
router.route("/:id").put(roomController.updateRoom);
router.route("/:id").get(roomController.getRoom);
router.route("/availability/:id").put(roomController.updateRoomAvailability);

module.exports = router;
