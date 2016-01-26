'use strict';

var urlHelper = require('url');
var objectAssign = require('object-assign');
var request = require('request');

var Forecast = function(config) {
	if (!config.accountId || !config.authorization) {
		throw new Error('Forecast module requires accountId and authorization to be configured.');
	}
	var self = this;

	this.accountId = config.accountId;
	this.authorization = config.authorization;

	this.defaultOptions = {
		json: true,
		headers: {
			authorization: this.authorization,
			'forecast-account-id': this.accountId,
			'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.143 Safari/537.36'
		}
	};

	this._request = function _request(relativeUrl, options, callback) {
		if (typeof options === 'function') {
			callback = options;
			options = {};
		}

		var mergedOptions = objectAssign({}, self.defaultOptions, options, {
			url: urlHelper.resolve('https://api.forecastapp.com', relativeUrl),
		});

		request(mergedOptions, function(err, res, body) {
			if (err) {
				return callback(err);
			}

			callback(null, body);
		});
	}

	var Whoami = require('./whoami');
	var Clients = require('./clients');
	var People = require('./people');
	var Projects = require('./projects');
	var Assignments = require('./assignments');
	var Milestones = require('./milestones');

	this.whoami = new Whoami(this);
	this.clients = new Clients(this);
	this.people = new People(this);
	this.projects = new Projects(this);
	this.assignments = new Assignments(this);
	this.milestones = new Milestones(this);

	return this;
};


module.exports = Forecast;
