var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	database: "burgers_db"
});

//THIS INITIATS THE CONNECTION
connection.connect(function(err){
	
	//IF THERE IS AN ERROR, LOG IT
	if(err){
		console.error("error connecting: " + err.stack);
		return;
	}
	//IF WE'RE CONNECTED, TELL US TO WHICH THREAD
	console.log("connected as id " + connection.threadID);
});


connection.query("INSERT INTO burgers_db VALUES
					1,
					single_cheese,
					FALSE,
					TIMESTAMP", function (err, res){

						if (err) throw err;

						console.log ("Added Burger: " + res);
					})