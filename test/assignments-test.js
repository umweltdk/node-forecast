require('dotenv').load();

var should = require('should');

var Forecast = require('../index');
var forecast = new Forecast({
	accountId: process.env.ACCOUNT_ID,
	authorization: process.env.AUTHORIZATION
});

describe('#assignments', function() {
	this.timeout(5000);

	it('should return an array of assignments', function(done) {
		forecast.assignments.list(function(err, assignments) {
			if (err) {
				throw err;
			}

			assignments.should.be.an.Array;

			done();
		});
	});

	it('should return an array of assignments using start/end date', function(done) {
		var payload = {
			startDate: new Date(),
			endDate: new Date(2014, 9, 1)
		};

		forecast.assignments.list(payload, function(err, assignments) {
			if (err) {
				throw err;
			}

			assignments.should.be.an.Array;

			done();
		});
	});
});
