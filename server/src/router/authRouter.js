const express = require('express');
const authController = require('../controllers/authController');
const authRouter = express.Router();

authRouter.post('/sign-up', authController.signUp);
authRouter.post('/sign-in', authController.signIn);
authRouter.post('/refresh', authController.refresh);

module.exports = authRouter;
