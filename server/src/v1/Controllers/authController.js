const User = require("../Models/authModels");
const jsonwebtoken = require("jsonwebtoken");

const maxAge = 24 * 60 * 60;

const createToken = (id) => {
  return jsonwebtoken.sign({ id }, process.env.TOKEN_KEY, {
    expiresIn: maxAge,
  });
};


module.exports.register = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.create({ email, password });
    const token = createToken(user._id);

    res.cookie("jsonwebtoken", token, {
      withCredentials: true,
      httpOnly: false,
      maxAge: maxAge * 365,
    });

    res.status(201).json({ user: user._id, created: true });
    
  } catch (err) {
    res.status(500).json(err);
  }

};
