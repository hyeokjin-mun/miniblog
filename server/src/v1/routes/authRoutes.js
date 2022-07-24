const express = require("express");
const router = express.Router();

const register = async (req, res) => {
  const { email, password } = req.body;
  console.log(`sever side ${email} ${password}`);
};

router.post("/register", register);

module.exports = router;
