const hotel = require("../Modals/Hotel");
const room = require("../Modals/Room");

const createHotel = async (req, res, next) => {
  try {
    const data = req.body;
    const newHotel = new hotel(data);
    const updateHotel = await newHotel.save();
    res.status(201).json({
      data: updateHotel,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateHotel = async (req, res, next) => {
  try {
    const newHotel = await hotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(201).json({
      data: newHotel,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteHotel = async (req, res, next) => {
  try {
    const dhotel = await hotel.findByIdAndDelete(req.params.id);
    res.status(201).json({
      data: dhotel,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

const getHotel = async (req, res, next) => {
  try {
    const hotels = await hotel.findById(req.params.id);
    res.status(201).json({
      data: hotels,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

const getAllHotels = async (req, res, next) => {
  const { min, max, limit, ...others } = req.query;
  console.log("i am calling", limit);
  try {
    const hotels = await hotel
      .find({
        ...others,
        cheapestPrice: { $gt: min | 1, $lt: max | 999 },
      })
      .limit(limit);
    res.status(201).json({
      data: hotels,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

const countByCity = async (req, res, next) => {
  const city = req.query.cities.split(",");
  try {
    const list = await Promise.all(
      city.map((data) => {
        return hotel.countDocuments({ city: data });
      })
    );
    res.status(200).json({
      data: list,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

const CountByType = async (req, res, next) => {
  try {
    const counHotel = await hotel.countDocuments({ type: "hotel" });
    const counApartment = await hotel.countDocuments({ type: "apartment" });
    const countVilla = await hotel.countDocuments({ type: "villa" });
    const counResort = await hotel.countDocuments({ type: "resort" });
    const countCaben = await hotel.countDocuments({ type: "caben" });
    res.status(200).json([
      { type: "hotel", count: counHotel },
      { type: "appartment", count: counApartment },
      { type: "caben", count: countCaben },
      { type: "resort", count: counResort },
      { type: "villa", count: countVilla },
    ]);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getHotelRooms = async (req, res, next) => {
  try {
    const Hotel = await hotel.findById(req.params.id);
    const list = await Promise.all(
      Hotel.map((rooms) => {
        return room.findById(rooms);
      })
    );
    res.status(200).json({
      data: list,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  createHotel,
  deleteHotel,
  getAllHotels,
  getHotel,
  countByCity,
  getHotelRooms,
  CountByType,
  updateHotel,
};
