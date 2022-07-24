module.exports.register = async (req, res) => {
  const {email, password} = req.body;
  console.log(`sever side ${email} ${password}`)



}