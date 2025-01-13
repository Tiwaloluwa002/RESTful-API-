const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Configure dotenv
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const DATABASE_URL = process.env.DATABASE_URL;

// Middleware
app.use(express.json());

// MongoDB Connection
mongoose.connect(DATABASE_URL)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error.message);
    });


// Routes
app.get('/', (req, res) => {
    res.send('Welcome to the Library Management API!');
});

const bookRoutes = require('./routes/bookRoutes'); // Adjust path if necessary
app.use('/api/books', bookRoutes);


// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
