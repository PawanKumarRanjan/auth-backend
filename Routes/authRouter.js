const { signupValidation, loginValidation } = require('../Middlewares/authValidation');
const { signup, login } = require('../Controllers/authController');
const express = require('express');
const router = express.Router();

router.post('/auth/login', loginValidation, login);
router.post('/auth/signup', signupValidation, signup);

<<<<<<< HEAD
module.exports = router;
=======
module.exports = router;
>>>>>>> 72e5f0270682d5ae550cc8352b14ad2eb153108e
