const express = require("express");
const app = express();
const cors = require("cors");
require("./config/db");

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

const hotelRoutes = require("./Routes/Hotel");
const roomRoutes = require("./Routes/Room");
const userRoutes = require("./Routes/user");

app.use("/api/hotel", hotelRoutes);
app.use("/api/room", roomRoutes);
app.use("/api/user", userRoutes);

app.listen(3001, () => {
  console.log("port is running at 3001");
});
