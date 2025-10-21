// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');

// Load environment variables from .env file
dotenv.config();

// Import routes
const noteRoutes = require('./routes/NoteRoutes');

// Initialize express app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json()); // to parse JSON request bodies

// Disable mongoose buffering globally
mongoose.set('bufferCommands', false);

// Connect to MongoDB Atlas
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000, // Increase timeout to 30 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
  })
  .then(() => {
    console.log('✅ Connected to MongoDB Atlas');
    // Start the server only after successful connection
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('❌ MongoDB connection error:', error);
    process.exit(1); // Exit the process if connection fails
  });

// Routes
app.use('/api', noteRoutes); // all note routes will start with /api

// Test route
app.get('/', (req, res) => {
  res.send('Notes API is running 🚀');
});
