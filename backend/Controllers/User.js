const bcrypt = require("bcrypt");
const User = require("../Modals/user");
const generateAccessToken = require("../Utils/jwtToken");
const jwt = require("jsonwebtoken");

const register = async (req, res, next) => {
  const { username, email, password, isAdmin } = req.body;

  try {
    const user = await User.findOne({ email }).lean();
    // console.log("user is ", user);
    const hashing = password.toString();
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(hashing, parseInt(salt));
    if (user) {
      throw new Error("user is already exist");
    }
    if (!username && !email && !password) {
      throw new Error("pleease give proper data");
    }
    const newUser = new User({
      username: username,
      email: email,
      password: hashedPassword,
      isAdmin: isAdmin,
    });
    console.log("created user is ", newUser);
    const update = await newUser.save();
    if (newUser) {
      console.log("user is ", update);
      res.status(201).json({
        username: newUser.username,
        id: newUser._id,
        email: newUser.email,
      });
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const login = async (req, res, next) => {
  const { email, password } = req.body;
  console.log("email ", email);
  try {
    const isUser = await User.findOne({ email });
    console.log("user is ", isUser);
    // const newToken = generateAccessToken(isUser);
    // console.log("token is  ", newToken);
    if (!isUser) {
      res.status(500).json("User with given not found");
    }
    const isMatch = await bcrypt.compare(password, isUser.password);
    console.log("is match ", isMatch);
    if (!isMatch) {
      res.status(500).json("User password doesn't Match");
    }

    if (isUser && isMatch) {
      console.log("username", isUser);
      res.status(200).json({
        data: isUser,
        token: generateAccessToken(isUser),
      });
    }
  } catch (error) {
    res;
  }
};

module.exports = {
  login,
  register,
};
