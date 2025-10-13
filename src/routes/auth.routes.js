const express = require('express');
const { body } = require('express-validator');
const { signup, login } = require('../controllers/auth.controller');
const validate = require('../middlewares/validate');

const router = express.Router();

// SIGNUP → POST /api/v1/user/signup
router.post(
  '/signup',
  [
    body('username').notEmpty().withMessage('Username is required'),
    body('email').isEmail().withMessage('Valid email required'),
    body('password')
      .isLength({ min: 6 })
      .withMessage('Password must be at least 6 characters'),
  ],
  validate, // <-- use centralized middleware
  signup
);

// LOGIN → POST /api/v1/user/login
router.post(
  '/login',
  [
    body('email').notEmpty().withMessage('Email or username is required'),
    body('password').notEmpty().withMessage('Password is required'),
  ],
  validate, // <-- use centralized middleware
  login
);

module.exports = router;
