const express = require("express");
const router = express.Router();

const sendApi = (req, res) => {
  res.json({username: 'test one'});
}


// const another = (req, res) => {
//   res.json({username: 'test two'});
// }

router.get("/", sendApi)
// router.get("/another", another)


module.exports = router;
