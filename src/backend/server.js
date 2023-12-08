// src/backend/server.js
const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb-connection-string', { userNewUrlParser: true, useUnifiedTopology: true, })
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

// Middleware to parse JSON
app.use(express.json());

// Testing
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Define routes
app.use('/api/events', require('./routes/events'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));