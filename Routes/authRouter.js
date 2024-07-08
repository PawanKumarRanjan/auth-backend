const { signupValidation, loginValidation } = require('../Middlewares/authValidation');
const { signup, login } = require('../Controllers/authController');
const express = require('express');
const router = express.Router();

router.post('/auth/login', loginValidation, login);
router.post('/auth/signup', signupValidation, signup);

module.exports = router;