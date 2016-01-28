'use strict';

var utils = require('./utils');
var Assignments;

module.exports = Assignments = function(api) {
	this._request = api._request;
};

Assignments.prototype.list = function(payload, callback) {
	// '/assignments?start_date=2014-08-18&end_date=2014-09-14'
	if (typeof payload === 'function') {
		callback = payload;
		payload = {};
	}

	var options = {
		qs: utils.buildQueryString(payload)
	};

	this._request('/assignments', options, function(err, json) {
		callback(err, json.assignments);
	});
}

Assignments.prototype.create = function(payload, callback) {
	var options = {
		method: 'POST',
		body: payload,
		json: true
	};

	this._request('/assignments', options, function(err, json) {
		callback(err, json.assignment);
	});
}

Assignments.prototype.remove = function(id, callback) {
	var options = {
		method: 'DELETE'
	};

	this._request('/assignments/' + id, options, function(err, json) {
		callback(err, json.assignment);
	});
}

Assignments.prototype.getById = function(id, callback) {
	var options = {
		method: 'GET'
	};

	this._request('/assignments/' + id, options, function(err, json) {
		callback(err, json.assignment);
	});
}

Assignments.prototype.update = function(id, payload, callback) {
	var options = {
		method: 'PUT',
		body: payload,
		json: true
	};

	this._request('/assignments/' + id, options, function(err, json) {
		callback(err, json.assignment);
	});
}
