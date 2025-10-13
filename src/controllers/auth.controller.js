const bcrypt = require('bcryptjs');
const User = require('../models/User');

// SIGNUP → POST /api/v1/user/signup
exports.signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if username or email already exists
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return res.status(400).json({
        status: false,
        message: 'Username or email already exists'
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const user = await User.create({
      username,
      email,
      password: hashedPassword
    });

    res.status(201).json({
      message: "User created successfully.",
      user_id: user._id
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: false, message: "Server error during signup" });
  }
};

// LOGIN → POST /api/v1/user/login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email or username
    const user = await User.findOne({ email }) || await User.findOne({ username: email });
    if (!user) {
      return res.status(400).json({ status: false, message: "Invalid username or password" });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ status: false, message: "Invalid username or password" });
    }

    // Login successful
    res.status(200).json({ message: "Login successful." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: false, message: "Server error during login" });
  }
};
