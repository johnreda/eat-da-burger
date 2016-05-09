


// Dependencies
// =============================================================
var orm = require ("../config/orm.js");

module.exports = function(app){

		app.post('/', function (req, res){
			orm.addBurger()
	})
}
