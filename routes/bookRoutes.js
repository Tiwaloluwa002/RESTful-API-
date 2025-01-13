const express = require('express');
const router = express.Router();

// Example: Get all books
router.get('/', (req, res) => {
    res.json({ message: 'List of all books' });
});

// Example: Add a new book
router.post('/', (req, res) => {
    const { title, author } = req.body;
    res.json({ message: `Book titled '${title}' by ${author} added.` });
});

module.exports = router;
