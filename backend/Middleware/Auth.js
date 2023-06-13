const bcrypt = require("bcrypt");
const User = require("../Modals/user");
const generateToken = require("../Utils/jwtToken");
const jwt = require("jsonwebtoken");

export const verify = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    res.status(403).json("You are not authorized");
  }
  const token = authHeader?.split(" ")[1];
  try {
    if (authHeader) {
      jwt.verify(token, "akxpa4152", (err, user) => {
        if (err) {
          throw new Error("token is not valid!");
        }
        req.user = user;
        next();
      });
    }
  } catch (e) {
    res.status(500).send({
      status: "failure",
      message: e.message,
    });
  }
};

export const verifyAdmin = async (req, res, next) => {
  try {
    if (req.user && req.user.isAdmin) {
      next();
    }
  } catch (error) {
    res.status(500).json({
      message: "you are not authorized to access this route",
    });
  }
};
