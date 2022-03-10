//use the express router middleware to create all my routes, and export the router middleware with routes attached
const express = require('express');
const router = express.Router();
const viewRoutes = require("./viewRoutes");
const apiRoutes = require("./apiRoutes")
router.use(viewRoutes);
router.use("/api", apiRoutes);

module.exports = router;