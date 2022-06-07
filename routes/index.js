const express = require("express");

// Initialize Router
const router = express.Router();

const indexCtrl = require("../controllers/index");

router.get("/", indexCtrl.index_get)

module.exports = router;