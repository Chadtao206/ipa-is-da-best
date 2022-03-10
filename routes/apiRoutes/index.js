//this is the entry point for all of our API routes
const express = require('express');
const router = express.Router();
const tipRoutes = require("./tipRoutes");
const feedbackRoutes = require("./feedbackRoutes");

router.use("/tips",tipRoutes) ///tips
router.use("/feedback",feedbackRoutes) ///feedbavck routes

module.exports = router;