// Express dependency
const express = require("express");

// Initialize Router
const router = express.Router();

// Route for the index controller
const indexCtrl = require("../controllers/index");

// Path to index, execution at that path
router.get("/", indexCtrl.index_get)

module.exports = router;