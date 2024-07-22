const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./Routes/authRouter');
const DashboardRouter = require('./Routes/dashboardRouter')
const { signupValidation, loginValidation } = require('./Middlewares/authValidation');
const { signup, login } = require('./Controllers/authController');
const ensureAuthenticated = require('./Middlewares/auth');
require('dotenv').config()
require('./Models/db');
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());
app.use('/auth', AuthRouter);
app.use('/dashboard', DashboardRouter);

app.get('/', (req, res) => {
    res.send("hello");
});

// app.post('/signup', signupValidation, signup);

// app.get('/' ,ensureAuthenticated, (req, res) => {
//     console.log('--- logged in user detail ---');
//     res.status(200).json({
//         message: "hello user"
//     });
// });

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
