// "using" statements
var express = require("express");
var bodyParser = require('body-parser');

// App Setup
var app = express();
// Post Data Setup
app.use(bodyParser.json()); // For taking in JSON objects

// Comment Out for Postman Testing
app.use(express.static( __dirname + '/public/dist/public' ));

require('./server/config/routes')(app);

app.listen(8000, function(){
    console.log("listening on port 8000");
})