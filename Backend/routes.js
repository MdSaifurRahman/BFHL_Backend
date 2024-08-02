// routes.js
const express = require('express');
// Create router instance
const router = express.Router();
// Import the Api
const Api = require('./api');

// Fetch all records using POST
router.post("/bfhl", Api.data_all);
router.get("/bfhl", Api.operation_code);
// Insert a record (example, uncomment when implementing)
// router.post("/insert", Api.insert_data);

// Update a record (example, uncomment when implementing)
// router.put("/update", Api.update_data);

module.exports = router;
