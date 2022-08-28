const jwt = require("jsonwebtoken");
const JWT_SECRET = "Abhishekisagoodb$oy";

const protectUser = (req, res, next) => {
  const token = req.header("auth-token");

  if (!token) {
    res
      .status(401)
      .json({ message: "Pleases authenticate using a valid token" });
  }

  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data;
    next();
  } catch (error) {
    console.log(error);
    res
      .status(401)
      .json({ message: "Please authenticate using a valid token" });
  }
};

module.exports = protectUser;
