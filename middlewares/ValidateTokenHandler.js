const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateToken = asyncHandler(async (req, res, next) => {
  let token;
  const authHeader = req.headers.authorization || req.headers.Authorization;

  if (authHeader && authHeader.startsWith("Bearer ")) {
    token = authHeader.split(" ")[1];

    try {
      const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
      console.log(" Decoded JWT:", decoded); // Debug
      req.user = decoded.user; // Attach user payload
      next();
    } catch (err) {
      console.log("JWT error:", err.message);
      res.status(401);
      throw new Error("user is not authorized");
    }
  } else {
    res.status(401);
    throw new Error("No token provided");
  }
});

module.exports = validateToken;
