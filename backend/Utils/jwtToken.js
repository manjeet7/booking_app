const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const generateAccessToken = (user) => {
  return jwt.sign(
    {
      username: user.username,
      isAdmin: user.isAdmin,
      _id: user._id,
    },
    "akxpa4152",
    { expiresIn: 60 * 60 * 60 } // 1 hour
  );
};

module.exports = generateAccessToken;
