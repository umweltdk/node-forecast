require('dotenv').load();

var should = require('should');

var Forecast = require('../index');
var forecast = new Forecast({
	accountId: process.env.ACCOUNT_ID,
	authorization: process.env.AUTHORIZATION
});

describe('#milestones', function() {
	this.timeout(5000);

	it('should return an array of milestones', function(done) {
		forecast.milestones.list(function(err, milestones) {
			if (err) {
				throw err;
			}

			milestones.should.be.an.Array;

			done();
		});
	});

	it('should return an array of milestones using start/end date', function(done) {
		var payload = {
			startDate: new Date(),
			endDate: new Date(2014, 9, 1)
		};

		forecast.milestones.list(payload, function(err, milestones) {
			if (err) {
				throw err;
			}

			milestones.should.be.an.Array;

			done();
		});
	});
});
