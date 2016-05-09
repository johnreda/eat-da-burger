//DEPENDENCIES ====================================
var express = require('express');
//var method = require('method-override');
var bodyParser = require ('body-parser');

//SET UP EXPRESS APP =============================
var app = express();
var PORT = process.env.PORT || 3000;


// Sets up the Express app to handle data parsing 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

//ROUTES =========================================

require("./app/routes/html-routes.js")(app);
require("./app/routes/api-routes.js")(app);


//LISTENER =======================================
app.listen(PORT, function(){
	console.log('APP IS LISTENING ON PORT: ' + PORT);
})




