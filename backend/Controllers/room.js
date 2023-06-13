const hotel = require("../Modals/Hotel");
const room = require("../Modals/Room");

const createRoom = async (req, res, next) => {
  const hotelId = req.params.hotelId;
  const newRoom = new room(req.body);
  try {
    const savedRoom = await newRoom.save();
    console.log("saved room ", savedRoom);
    await hotel.findByIdAndUpdate(hotelId, {
      $push: { rooms: savedRoom._id },
    });
    res.status(200).json({
      data: savedRoom,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateRoom = async (req, res, next) => {
  try {
    const Room = await room.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json({
      data: Room,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateRoomAvailability = async (req, res, next) => {
  console.log("availability called");
  try {
    const roomData = await room.updateOne(
      { "roomNumbers._id": req.params.id },
      {
        $push: {
          "roomNumbers.$.unavailableDates": req.body.dates,
        },
      }
    );
    console.log("room data", roomData);
    res.status(201).json({
      message: "date has been updated",
    });
  } catch (error) {
    next(error);
  }
};

const getRoom = async (req, res, next) => {
  console.log("api is  called ");
  try {
    const Hotels = await hotel.findById(req.params.id);
    console.log("hotel is ", Hotels);
    const list = await Promise.all(
      Hotels.rooms.map((id) => {
        return room.findById(id);
      })
    );
    console.log("room is ", list);
    res.status(200).json({
      data: list,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

const getRooms = async (req, res, next) => {
  try {
    const rooms = await room.find();
    res.status(200).json({
      data: room,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  createRoom,
  getRoom,
  getRooms,
  updateRoom,
  updateRoomAvailability,
};
