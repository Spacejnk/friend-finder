var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var port = process.env.PORT || 3000;

//----
// bodyParser
// ----

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// find all files
app.use(express.static('app/public'));

// add routes from app folder in friend-finder --OUTSIDE <
var apiRoutes = require('./app/routing/apiRoutes.js')(app);
var htmlRoutes = require('./app/routing/htmlRoutes.js')(app);

app.listen(port, () => console.log("listening on port", port));


