/* importar o mongodb */
var mongo = require('mongodb');

var connMongoDB = function(){
	console.log('Conectou ao Mongo');
	var db = new mongo.Db(
		'Equipamentos',
		new mongo.Server(
			'localhost',
			27017,
			{}
		),
		{}
	);

	return db;
}

module.exports = function(){
	return connMongoDB;
}