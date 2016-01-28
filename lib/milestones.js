'use strict';

var utils = require('./utils');
var Milestones;

module.exports = Milestones = function(api) {
	this._request = api._request;
};

Milestones.prototype.list = function(payload, callback) {
	// '/milestones?start_date=2014-08-18&end_date=2014-09-14'
	if (typeof payload === 'function') {
		callback = payload;
		payload = {};
	}

	var options = {
		qs: utils.buildQueryString(payload)
	};

	this._request('/milestones', options, function(err, json) {
		callback(err, json.milestones);
	});
}

Milestones.prototype.create = function(payload, callback) {
	var options = {
		method: 'POST',
		body: payload,
		json: true
	};

	this._request('/milestones', options, function(err, json) {
		callback(err, json.milestone);
	});
}

Milestones.prototype.remove = function(id, callback) {
	var options = {
		method: 'DELETE'
	};

	this._request('/milestones/' + id, options, function(err, json) {
		callback(err, json.milestone);
	});
}

Milestones.prototype.getById = function(id, callback) {
	var options = {
		method: 'GET'
	};

	this._request('/milestones/' + id, options, function(err, json) {
		callback(err, json.milestone);
	});
}

Milestones.prototype.update = function(id, payload, callback) {
	var options = {
		method: 'PUT',
		body: payload,
		json: true
	};

	this._request('/milestones/' + id, options, function(err, json) {
		callback(err, json.milestone);
	});
}
