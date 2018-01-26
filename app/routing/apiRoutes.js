// Dependencies
var tables = require('../data/tables');
var waitlist = require('../data/waitlist');

module.exports = function(app) {
	app.get('/api/tables', function(req, res) {
		return res.json(tables);
	});
	app.get('/api/waitlist', function(req, res) {
		return res.json(waitlist);
	});
	app.post('/api/reserve', function(req, res) {
		var reservation = req.body;
		var success = false;

		if(tables.length >= 5 ) {
			waitlist.push(reservation);
		} else {
			tables.push(reservation);
			success = true;
		}
		res.json({reserved: success});
	});
};