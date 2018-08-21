let express = require('express');
var request = require('request');
const api = require('./api');
const candy = require('./candy');
const apiQueryParams = require('./api_query_params');
const apiPathParams = require('./api_path_params');
const apiBodyRequests = require('./api_body_requests');
let bodyParser = require('body-parser');
let app = express();
app.use('/', api);
app.use('/', candy);
app.use('/', apiQueryParams);
app.use('/', apiPathParams);
app.use('/', apiBodyRequests);
app.use(express.static('node_modules'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.listen(8080, function(){
    console.log('running...');
});


request('http://api.apixu.com/v1/current.json?key=fbe4f3586edf4bbe93590218181908&q=paris', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    let data = JSON.parse(body) // Shows the HTML for the EA homepage. 
    console.log(data.location.name);
  }
})


















