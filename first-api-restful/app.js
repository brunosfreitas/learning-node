var app = require('./config/app_config');
var db = require('./config/db_config');
var Protudo = require('./models/Produto');

app.get('/', function(req, res) {
	res.end('Bem-vindo a API de produtos');
});