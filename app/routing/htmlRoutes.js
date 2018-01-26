// Dependencies
var path = require('path');

// get project root directory
var appDir = path.dirname(require.main.filename);

module.exports = function(app) {
	app.get('/', function(req, res) {
		res.sendFile(path.join(appDir, 'app/public/home.html'));
	});
	app.get('/reserve', function(req, res) {
		res.sendFile(path.join(appDir, 'app/public/reserve.html'));
	});
	app.get('/tables', function(req, res) {
		res.sendFile(path.join(appDir, 'app/public/tables.html'));
	});
};