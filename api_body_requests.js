const express = require('express');
const router = express.Router();
router.post('/users', function(req, res) {
    console.log(req.body); //the data on a new book
    res.send("From server route");
  });
module.exports = router;