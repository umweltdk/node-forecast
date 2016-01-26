'use strict';

var utils = require('./utils');
var Projects;

module.exports = Projects = function(api) {
	this._request = api._request;
};

Projects.prototype.list = function(callback) {
	this._request('/projects', function(err, json) {
		callback(err, json.projects);
	});
}

Projects.prototype.create = function(payload, callback) {
	var options = {
		method: 'POST',
		body: payload,
		json: true
	};

	this._request('/projects', options, function(err, json) {
		callback(err, json.projects);
	});
}

Projects.prototype.remove = function(id, callback) {
	var options = {
		method: 'DELETE'
	};

	this._request('/projects/' + id, options, function(err, json) {
		callback(err, json.projects);
	});
}

Projects.prototype.getById = function(id, callback) {
	var options = {
		method: 'GET'
	};

	this._request('/projects/' + id, options, function(err, json) {
		callback(err, json.projects);
	});
}

Projects.prototype.update = function(id, payload, callback) {
	var options = {
		method: 'PUT',
		body: payload,
		json: true
	};

	this._request('/projects/' + id, options, function(err, json) {
		callback(err, json.projects);
	});
}
