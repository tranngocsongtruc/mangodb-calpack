// routes/events.js
const express = require('express');
const router = express.Router();

// Mock data for events
const events = [
    // ... event objects go here
];

router.get('/', (req, res) => {
    res.json(events);
});

module.exports = router;