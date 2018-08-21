const express = require('express');
const router = express.Router(); 
router.get('/', function(request, response){
    response.send({ name: 'John', age: 30 });
});
router.get('/next', function(request, response){
    response.send('yippee');
});
router.get('/me', function(request, response){
    response.send({
        name: 'Akiva',
        food: 'steak',
        birthday: 'maserati'
    });
});
module.exports = router;