// Load environment variables
const dotenv = require('dotenv');
dotenv.config();

// Import required packages
const express = require('express');
const connectDB = require('./config/db');

// Import routes
const authRoutes = require('./routes/auth.routes');
const empRoutes = require('./routes/emp.routes');

// Initialize Express app
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Connect to MongoDB
connectDB();

// Root route to test server
app.get('/', (req, res) => {
  res.send('Server is running...');
});

// API routes
app.use('/api/v1/user', authRoutes); // signup/login routes
app.use('/api/v1/emp', empRoutes);   // employee CRUD routes

// Handle unknown routes
app.use((req, res) => {
  res.status(404).json({ status: false, message: 'Route not found' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
