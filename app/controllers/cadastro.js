module.exports.cadastro = function (application, req, res){
	res.render('cadastro', {validacao: {}, dadosForm: {}});
}

module.exports.cadastrar = function(application, req, res){

	var dadosForm = req.body;

	req.assert('cd_equipamento', 'Código do equipamento não pode ser vazio').notEmpty();
	req.assert('ds_equipamento', 'Modelo do equipamento não pode ser vazio').notEmpty();
	req.assert('localizacao', 'Localização não pode ser vazia').notEmpty();
	req.assert('contador', 'Contador não pode ser vazio').notEmpty();

	var erros = req.validationErrors();

	if(erros){
		res.render('cadastro', {validacao: erros, dadosForm: dadosForm});
		return;
	}

	var connection = application.config.dbConnection;
	var EquipamentosDAO = new application.app.models.EquipamentosDAO(connection);

	EquipamentosDAO.inserirEquipamento(dadosForm);

//	res.render('../routes/index')
}