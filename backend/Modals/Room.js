const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    MaxPeople: {
      type: Number,
      required: true,
    },
    roomNumbers: [{ number: Number, unavailableDates: { type: [Date] } }],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("room", roomSchema);