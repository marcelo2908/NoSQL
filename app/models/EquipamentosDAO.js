function EquipamentosDAO(connection){
	this._connection = connection();
}

EquipamentosDAO.prototype.inserirEquipamento = function(equipamento){
	this._connection.open( function(err, mongoclient){
		mongoclient.collection("equipamentos", function(err, collection){
			collection.insert(equipamento);

			mongoclient.close();
		});
	});
}

module.exports = function(){
	return EquipamentosDAO;
}