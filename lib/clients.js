'use strict';

var utils = require('./utils');
var Clients;

module.exports = Clients = function(api) {
	this._request = api._request;
};

Clients.prototype.list = function(callback) {
	this._request('/clients', function(err, json) {
		callback(err, json.clients);
	});
}

Clients.prototype.create = function(payload, callback) {
	var options = {
		method: 'POST',
		body: payload,
		json: true
	};

	this._request('/clients', options, function(err, json) {
		callback(err, json.clients);
	});
}

Clients.prototype.remove = function(id, callback) {
	var options = {
		method: 'DELETE'
	};

	this._request('/clients/' + id, options, function(err, json) {
		callback(err, json.clients);
	});
}

Clients.prototype.getById = function(id, callback) {
	var options = {
		method: 'GET'
	};

	this._request('/clients/' + id, options, function(err, json) {
		callback(err, json.clients);
	});
}

Clients.prototype.update = function(id, payload, callback) {
	var options = {
		method: 'PUT',
		body: payload,
		json: true
	};

	this._request('/clients/' + id, options, function(err, json) {
		callback(err, json.clients);
	});
}
