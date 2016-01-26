'use strict';

var utils = require('./utils');
var People;

module.exports = People = function(api) {
	this._request = api._request;
};

People.prototype.list = function(callback) {
	this._request('/people', function(err, json) {
		callback(err, json.people);
	});
}

People.prototype.create = function(payload, callback) {
	var options = {
		method: 'POST',
		body: payload,
		json: true
	};

	this._request('/people', options, function(err, json) {
		callback(err, json.people);
	});
}

People.prototype.remove = function(id, callback) {
	var options = {
		method: 'DELETE'
	};

	this._request('/people/' + id, options, function(err, json) {
		callback(err, json.people);
	});
}

People.prototype.getById = function(id, callback) {
	var options = {
		method: 'GET'
	};

	this._request('/people/' + id, options, function(err, json) {
		callback(err, json.people);
	});
}

People.prototype.update = function(id, payload, callback) {
	var options = {
		method: 'PUT',
		body: payload,
		json: true
	};

	this._request('/people/' + id, options, function(err, json) {
		callback(err, json.people);
	});
}
