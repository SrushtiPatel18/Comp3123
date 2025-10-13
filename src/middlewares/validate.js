const { validationResult } = require('express-validator');

/**
 * Middleware to handle validation errors from express-validator.
 * If there are validation errors, returns 400 Bad Request with the first message.
 * Otherwise, continues to the next middleware/controller.
 */
const validate = (req, res, next) => {
  const errors = validationResult(req);
  
  if (!errors.isEmpty()) {
    return res.status(400).json({
      status: false,
      message: errors.array()[0].msg,  // Send the first validation message
    });
  }

  next(); // continue to controller
};

module.exports = validate;