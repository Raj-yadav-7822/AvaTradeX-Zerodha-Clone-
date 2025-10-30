const jwt = require("jsonwebtoken");

module.exports.verifyToken = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    req.user = decoded; // user._id assign karo
    next();
  } catch (err) {
    return res.status(400).json({ message: "Invalid token" });
  }
};
