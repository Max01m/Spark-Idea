const Router = require("express");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const router = new Router();
const bcrypt = require("bcrypt");
require("dotenv").config();
const { check, validationResult } = require("express-validator");
const secretKey = process.env.secretKey;

router.post(
  "/registration",
  [
    check("email", "Uncorrect email").isEmail(),
    check(
      "password",
      "Password must be longer than 3 and shorter 12 "
    ).isLength({ min: 3, max: 12 }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ massage: "Uncorrect request", errors });
      }
      const { email, password ,userName } = req.body;

      const candidate = await User.findOne({ email });

      if (candidate) {
        return res
          .status(400)
          .json({ massage: `User with this email ${email} already exit` });
      }
      const hashPassword = await bcrypt.hash(password, 8);
      const user = new User({userName , email, password: hashPassword });
      await user.save();
      return res.json({ massage: "User was created" });
    } catch (e) {
      console.log(e);
      res.send({ massage: "Server error" });
    }
  }
);

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ massage: "User not found" });
    }
    const isPassValid = bcrypt.compareSync(password, user.password);

    if (!isPassValid) {
      return res.status(400).json({ massage: "Invalid password" });
    }
    const token = jwt.sign({ id: user.id }, secretKey, { expiresIn: "1h" });
    return res.json({
      token,
      user: {
        id: user.id,
        email: user.email,
        avatar: user.avatar,
      },
    });
  } catch (e) {
    console.log(e);
    res.send({ massage: "Server error" });
  }
});

module.exports = router;
