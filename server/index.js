'use strict';

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/okindatechhub', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});

// API Routes
app.get('/api/products', (req, res) => {
  // Logic to get products
  res.send('Products list');
});

app.post('/api/products', (req, res) => {
  // Logic to create a new product
  res.send('Product created');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
