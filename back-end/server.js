const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const vehicleRoutes = require('./routes/vehicle');

const app = express(); // Initialize the Express application
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/vehicles', vehicleRoutes);

// Start server
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));