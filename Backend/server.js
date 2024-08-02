// app.js (main application file)
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
// Middleware to parse JSON
app.use(bodyParser.json());
app.use(cors()); // Allow all origins
// Import routes
const routes = require('./routes');

// Use the routes
app.use('/', routes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
