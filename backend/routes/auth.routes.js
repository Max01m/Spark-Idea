const Router = require("express");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const router = new Router();
const bcrypt = require("bcrypt");
require("dotenv").config();
const { check, validationResult } = require("express-validator");
const secretKey = process.env.secretKey;

// Default avatar URL
const DEFAULT_AVATAR_URL =
  "/broken-image.jpg";

// Middleware to verify JWT token
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(403).send({ message: "Token is not provided!" });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "Unauthorized!" });
    }
    req.user = decoded;
    next();
  });
};

router.post(
  "/registration",
  [
    check("email", "Uncorrect email").isEmail(),
    check("password", "Password must be longer than 3 and shorter 12 ").isLength({
      min: 3,
      max: 12,
    }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ message: "Uncorrect request", errors });
      }
      const { email, password, userName, avatar } = req.body;

      let user = await User.findOne({ email });

      if (user) {
        return res
          .status(400)
          .json({ message: `User with this email ${email} already exists` });
      }

      const hashPassword = await bcrypt.hash(password, 8);

      // Set default avatar if not provided
      const userAvatar = avatar || DEFAULT_AVATAR_URL;

      user = new User({
        userName,
        email,
        password: hashPassword,
        avatar: userAvatar,
      });
      await user.save();
      return res.json({ message: "User was created" });
    } catch (e) {
      console.error(e);
      res.status(500).send({ message: "Server error" });
    }
  }
);

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const isPassValid = bcrypt.compareSync(password, user.password);

    if (!isPassValid) {
      return res.status(400).json({ message: "Invalid password" });
    }
    const token = jwt.sign({ id: user.id }, secretKey, { expiresIn: "1h" });
    return res.json({
      token,
      user: {
        id: user.id,
        email: user.email,
        avatar: user.avatar,
        userName: user.userName,
      },
    });
  } catch (e) {
    console.error(e);
    res.status(500).send({ message: "Server error" });
  }
});

router.put("/users/:id", verifyToken, async (req, res) => {
  try {
    const { id } = req.params;
    const { userName, email, password, avatar } = req.body;

    let user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

  
    if (userName) user.userName = userName;
    if (email) user.email = email;
    if (password) {
      const hashPassword = await bcrypt.hash(password, 8);
      user.password = hashPassword;
    }
    if (avatar) user.avatar = avatar;

    await user.save();

    return res.json({ message: "User updated successfully", user });
  } catch (e) {
    console.error(e);
    res.status(500).send({ message: "Server error" });
  }
});

module.exports = router;
