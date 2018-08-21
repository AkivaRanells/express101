const express = require('express');
const router = express.Router();
router.get('/books', function(request, response) {
    var genretosearch = request.query.genre;
    var authortosearch = request.query.author;
    response.send(genretosearch+" "+ authortosearch);
   
  });
router.get('/names', function(req, res){
    let name = req.query.name;
    res.send('Hello '+name)
})
router.get('/person', function(req, res){
    let fName = req.query.fName;
    let lName = req.query.lName;
    res.send('Hello '+fName+" "+lName);
})
module.exports = router;