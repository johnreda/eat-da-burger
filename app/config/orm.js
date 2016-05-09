
// Dependencies
// =============================================================
var connection = require('./connection.js');


// ORM
// =============================================================

var orm ={
	allBurgers:function(table,callback){
		var s = 'SELECT * FROM '+table;

		connection.query(q,function(err,results){

			callback(results);
		});
	},
	addBurger:function(name,callback){
		var s = 'INSERT INTO burgers (burger_name,devoured) Values (?,false)';
		
		connection.query(s,[name],function(err,results){
			
			callback(results);
		});
	},
	devourIt:function(id,callback){
		var s = 'UPDATE burgers SET devoured = 1 WHERE id = ?';
		
		connection.query(s,[id],function(err,results){
			
			callback(results);
		});
	}
};

module.exports = orm;