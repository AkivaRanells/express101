const express = require('express');
const router = express.Router();
router.get('/what:whattheuserwants', function(req, res){
    var whattheuserwants = req.params.whattheuserwants;
  
    if(whattheuserwants == "about"){
      res.send({data: "We are cool"})
    } else if(whattheuserwants == "help"){
      res.send({message: "We are here to help you because we are cool"})
    } else{
      res.send({error: "Sorry, not understood- not cool!"});
    }
  });
router.get('/:name', function(req, res){
    let name = req.params.name;
    res.send('Hello '+name);
})
module.exports = router;