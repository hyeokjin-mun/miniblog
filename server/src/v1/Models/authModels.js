const mongoose = require("mongoose");
const {schemaOptions} = require('./modelOptions')
const CryptoJS = require('crypto-js')


const userSchema = new mongoose.Schema({
  email: {
    type: "String",
    required: [true, "이메일을 입력해 주세요"],
    unique: true,
  },

  password: {
    type: "String",
    required: [true, "비밀번호를 입력해 주세요"],
  }, 
  
}, schemaOptions);

userSchema.pre("save", async function(next) {
  this.password = CryptoJS.AES.encrypt(this.password,  process.env.PASSWORD_KEY)
  
})

module.exports = mongoose.model("User", userSchema);
