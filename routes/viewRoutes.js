const router = require("express").Router();
const path = require('path');
// GET Route for homepage
router.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/index.html'))
);

// GET Route for feedback page
router.get('/feedback', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/pages/feedback.html'))
);

module.exports = router;