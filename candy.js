const express = require('express');
const router = express.Router();
router.get('/candy', function(req, res){
    res.send('I want candy');
});
module.exports = router;