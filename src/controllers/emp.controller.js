const Employee = require('../models/Employee');

// CREATE Employee → POST /api/v1/emp/employees
exports.createEmployee = async (req, res) => {
  try {
    const employee = await Employee.create(req.body);
    res.status(201).json({
      message: 'Employee created successfully.',
      employee_id: employee._id
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: false, message: 'Server error while creating employee.' });
  }
};

// GET All Employees → GET /api/v1/emp/employees
exports.getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();

    const formattedEmployees = employees.map(emp => ({
      employee_id: emp._id.toString(),       // convert ObjectId to string
      first_name: emp.first_name,
      last_name: emp.last_name,
      email: emp.email,
      position: emp.position,
      salary: emp.salary,
      date_of_joining: emp.date_of_joining ? emp.date_of_joining.toISOString() : null, // ISO string
      department: emp.department
    }));

    res.status(200).json(formattedEmployees);
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: false, message: 'Server error while fetching employees.' });
  }
};


// GET Employee by ID → GET /api/v1/emp/employees/:eid
exports.getEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.eid);

    if (!employee) {
      return res.status(404).json({ status: false, message: 'Employee not found.' });
    }

    const formattedEmployee = {
      employee_id: employee._id.toString(),
      first_name: employee.first_name,
      last_name: employee.last_name,
      email: employee.email,
      position: employee.position,
      salary: employee.salary,
      date_of_joining: employee.date_of_joining ? employee.date_of_joining.toISOString() : null,
      department: employee.department
    };

    res.status(200).json(formattedEmployee);

  } catch (error) {
    console.error(error);
    res.status(500).json({ status: false, message: 'Server error while fetching employee.' });
  }
};

// UPDATE Employee by ID → PUT /api/v1/emp/employees/:eid
exports.updateEmployee = async (req, res) => {
  try {
    const updatedEmployee = await Employee.findByIdAndUpdate(
      req.params.eid,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedEmployee) {
      return res.status(404).json({ status: false, message: 'Employee not found.' });
    }
    res.status(200).json({ message: 'Employee details updated successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: false, message: 'Server error while updating employee.' });
  }
};

// DELETE Employee → DELETE /api/v1/emp/employees?eid=xxx
exports.deleteEmployee = async (req, res) => {
  try {
    const { eid } = req.query;
    const employee = await Employee.findByIdAndDelete(eid);

    if (!employee) {
      return res.status(404).json({ status: false, message: 'Employee not found.' });
    }

    // Return 200 OK with a message instead of 204 No Content
    res.status(200).json({ status: true, message: 'Employee deleted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: false, message: 'Server error while deleting employee.' });
  }
};
