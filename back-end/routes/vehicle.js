


const express = require('express');
const router = express.Router();

// Example route
router.get('/', (req, res) => {
  res.json({ message: 'Vehicle route working!' });
});

module.exports = connectDB;