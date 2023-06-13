const express = require("express");
const router = express.Router();
const hotelController = require("../Controllers/Hotel");

router.route("/").post(hotelController.createHotel);
router.route("/").get(hotelController.getAllHotels);

router.route("/:id").put(hotelController.updateHotel);
router.route("/:id").delete(hotelController.deleteHotel);

router.route("/find/:id").get(hotelController.getHotel);
router.route("/countByCity").get(hotelController.countByCity);
router.route("/countByType").get(hotelController.CountByType);
router.route("/room/:id").get(hotelController.getHotelRooms);

module.exports = router;
