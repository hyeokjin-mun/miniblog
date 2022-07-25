const express = require("express");
const router = express.Router();
const {register} = require('../Controllers/authController');
const { body } = require('express-validator');
const {validate} = require('../Middlewares/validate');
const User = require("../Models/authModels");




router.post("/register",
body('email').isEmail().withMessage('이메일을 입력해 주세요'),
body('password').isLength({min:8}).withMessage('8자리 이상의 비밀번호를 입력해 주세요'),
body('email').custom(value => {
return User.findOne({ email: value}).then(user=> {
  if(user) {
    return Promise.reject('등록된 이메일이 있습니다')
  }
})
}),


validate,
register);

module.exports = router;
