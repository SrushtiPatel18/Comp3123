const express = require('express');
const { body, validationResult } = require('express-validator');
const {
  createEmployee,
  getEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
} = require('../controllers/emp.controller');

const router = express.Router();

// CREATE employee
router.post(
  '/employees',
  [
    body('first_name').notEmpty().withMessage('First name is required'),
    body('last_name').notEmpty().withMessage('Last name is required'),
    body('email').isEmail().withMessage('Valid email required'),
    body('salary').isNumeric().withMessage('Salary must be a number'),
    body('department').notEmpty().withMessage('Department is required'),
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        status: false,
        message: errors.array()[0].msg,
      });
    }
    next();
  },
  createEmployee
);

// Other routes (GET, PUT, DELETE)
router.get('/employees', getEmployees);
router.get('/employees/:eid', getEmployeeById);
router.put('/employees/:eid', updateEmployee);
router.delete('/employees', deleteEmployee);

module.exports = router;
