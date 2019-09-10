var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var port = process.env.PORT || 3000;

//----
// bodyParser
// ----

// find all files
app.use(express.static('app/public'));

// add routes from app folder in friend-finder --OUTSIDE <
require('./app/routing/apiRoutes.js')(app)
require('./app/routing/htmlRoutes.js')(app);

app.listen(port, () => console.log("listening on port", port));


